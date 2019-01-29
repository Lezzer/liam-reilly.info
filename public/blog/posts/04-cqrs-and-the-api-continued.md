* * *

# CQRS and the API continued!

* * *

In the previous post I talked about the [CQRS](https://en.wikipedia.org/wiki/Command%E2%80%93query_separation#Command_query_responsibility_segregation) design pattern, and demonstrated a couple of `Commands` that I had implemented in the Vault API.

In this post I will add a couple of additional `Commands` but I will also show you how `Queries` work too.  I will end on a bit of [Terraform](https://www.terraform.io/) for good measure :)


### DynamoDB Commands

Whilst I chose to store users objects in an [S3](https://aws.amazon.com/s3/) bucket, and this is great. Easy to persist, easy to retrieve, delete etc.  It's not that great as far as building search functionality goes. 

It's for this reason that I also opted to create a record or a `Document` as it's known in [DynamoDB](https://aws.amazon.com/dynamodb/).  This `Document` would allow me to store additional meta data about the users object such as `filename` or `description` and other important properties such as who is able to access and decrypt/download the object.

My `Command` for creating my `Document` looks like this.
 
```
public class SaveDocumentToDynamoDbCommand : ICommand
{
    public Guid CommandId => Guid.NewGuid();
    public string CommandName => "SaveDocumentToDynamoDbCommand";
        
    public string ObjectId { get; set; }
    public string TableName { get; } = "vault";
    public string Owner { get; set; }
    public string CanDecrypt { get; set; }
    public string[] AuthorisedUsers { get; set; }
    public string Name { get; set; }
    public string Size { get; set; }
}
```

There is quite a number of properties here, but they are mostly just meta data.  

* ObjectId is the Id of the Object the user stored in S3.
* TableName is the name of our DynamoDB table.
* Owner is the Id/name of the user that owns this Document in DynamoDB.
* CanDecrypt will be one of three string values saying who an decrypt an object. Either 'ALL', 'ME' or 'USERS'.
* AuthorisedUsers will be a list of strings just showing the names or email addresses of other users able to access the object.  I haven't decided if this will be removed later yet or not.
* Name / Size are again just object metadata. For UI hints.   

The `CommandHandler` implementation looks something like this.

```
public class SaveDocumentToDynamoDbCommandHandler : ICommandHandler<SaveDocumentToDynamoDbCommand>
{
    private IDynamoDbClientFactory DbClientFactory { get; }

    public SaveDocumentToDynamoDbCommandHandler(IDynamoDbClientFactory dynamoDbClientFactory) => DbClientFactory = dynamoDbClientFactory;

    public async Task HandleAsync(SaveDocumentToDynamoDbCommand command)
    {
        try
        {
            var request = new PutItemRequest
            {
                TableName = command.TableName,
                Item = new Dictionary<string, AttributeValue>
                {
                    { "id", new AttributeValue { S = $"{Guid.NewGuid()}" } },
                    { "document_owner", new AttributeValue { S = command.Owner } },
                    { "can_decrypt", new AttributeValue { S = $"{command.CanDecrypt}" } },
                    { "authorised_users", new AttributeValue { SS = new List<string>(command.AuthorisedUsers) } },
                    { "s3_file_id", new AttributeValue { S = command.ObjectId } },
                    { "s3_file_name", new AttributeValue { S = command.Name } },
                    { "s3_file_size", new AttributeValue { N = command.Size } }
                }
            };

            using (var client = DbClientFactory.Create()) 
                await client.PutItemAsync(request);
        }
        catch (AmazonDynamoDBException e)
        {
            // error handling
            throw e;
        }
    }
}

```

We then inject this `CommandHandler` into our `Controller` action as in the previous post. 

```
private readonly ICommandHandler<SaveObjectToS3Command> _saveS3ObjectCommandHandler;
private readonly ICommandHandler<SaveDocumentToDynamoDbCommand> _saveDynamoDbDocumentCommandHandler; 

public ObjectController(
    ICommandHandler<SaveObjectToS3Command> saveS3ObjectCommandHandler,
    ICommandHandler<SaveDocumentToDynamoDbCommand> saveDynamoDbDocumentCommandHandler,
)
{
    _saveS3ObjectCommandHandler = saveS3ObjectCommandHandler;
    _saveDynamoDbDocumentCommandHandler = saveDynamoDbDocumentCommandHandler;
}

[HttpPost("create")]
public async Task<IActionResult> StoreObject([FromBody] UserObjectModelDto model)
{
   var s3ObjectKey = Guid.NewGuid().ToString();

    var s3Command = new SaveObjectToS3Command
    {
        Key = s3ObjectKey,
        Description = model.Description,
        Filename = model.Filename,
        Bytes = Convert.FromBase64String(model.Data)
    };

    await _saveS3ObjectCommandHandler.HandleAsync(s3Command);

    foreach (var user in model.Users)
    {
        var dynamoDbCommand = new SaveDocumentToDynamoDbCommand
        {
            ObjectId = s3ObjectKey,
            Owner = user,
            CanDecrypt = model.CanDecrypt,
            AuthorisedUsers = model.Users,
            Name = model.Filename,
            Size = s3Command.Bytes.Length.ToString()
        };

        await _saveDynamoDbDocumentCommandHandler.HandleAsync(dynamoDbCommand); 
    }
            
    return StatusCode(200, s3ObjectKey);
}
```

You can now see that when the user hits this API endpoint, the users `object` will be stored in S3 as before, and then a `Document` will be created in DynamoDB for each person that is able to access this `Object`.


### DynamoDB Queries

Now that you've seen how we store `Objects` in S3 and how we create associated `Documents` in DynamoDB, this is probably a good time to introduce the `Query` side of CQRS.

Below you can see the `IQuery` and `IQueryHandler` interfaces.

```
public interface IQuery<TResult>
{
    Guid QueryId { get; }
    string QueryName { get; }
}

public interface IQueryHandler<in TQuery, TResult> where TQuery: IQuery<TResult>
{
    Task<TResult> HandleAsync(TQuery query);
}

```

You will notice that whilst these interfaces are similar, they are a little more involved than `ICommand` and `ICommandHandler`. This is because unlike their `Command` counter parts, concrete implementations of these interfaces will return a result.

Let's dive into `GetDocumentsFromDynamoDbByUserQuery`.  This will be used to find all `Documents` that a specified `User` owns.


```
public class GetDocumentsFromDynamoDbByUserQuery : Query<GetDocumentsFromDynamoDbByUserQueryResponseModel>
{
    public string User { get; set; }
    public string TableName { get; } = "vault";
}

``` 

The query itself is simple enough, we will be querying the `vault` DyanamoDB table, for `Documents` owned by the supplied `User`.

This query will also return a result or model `GetDocumentsFromDynamoDbByUserQueryResponseModel`.

```
public class GetDocumentsFromDynamoDbByUserQueryResponseModel
{
    public List<DynamoDbDocumentModel> Documents { get; set; }

    public GetDocumentsFromDynamoDbByUserQueryResponseModel() => Documents = new List<DynamoDbDocumentModel>();

    ~GetDocumentsFromDynamoDbByUserQueryResponseModel() => Documents = null;
}
```

The `GetDocumentsFromDynamoDbByUserQueryHandler` as you might expect, accepts our `GetDocumentsFromDynamoDbByUserQuery` object, does it's thing then returns our model `GetDocumentsFromDynamoDbByUserQueryResponseModel`.


```
public class GetDocumentsFromDynamoDbByUserQueryHandler : IQueryHandler<GetDocumentsFromDynamoDbByUserQuery, GetDocumentsFromDynamoDbByUserQueryResponseModel>
{
    private IDynamoDbClientFactory DynamoDbClientFactory { get; }

    public GetDocumentsFromDynamoDbByUserQueryHandler(IDynamoDbClientFactory dynamoDbClientFactory) => DynamoDbClientFactory = dynamoDbClientFactory;

    public async Task<GetDocumentsFromDynamoDbByUserQueryResponseModel> HandleAsync(GetDocumentsFromDynamoDbByUserQuery query)
    {
        var request = new QueryRequest
        {
            TableName = query.TableName,
            IndexName = "gsi",
            KeyConditionExpression = "document_owner = :owner",
            ExpressionAttributeValues = new Dictionary<string, AttributeValue>
            {
                { ":owner", new AttributeValue($"{query.User}") }
            }
        };

        var responseModel = new GetDocumentsFromDynamoDbByUserQueryResponseModel();
        try
        {
            using (var client = DynamoDbClientFactory.Create())
            {
                var response = await client.QueryAsync(request);
                response.Items.ForEach(doc =>
                {
                    responseModel.Documents.Add(
                        new DynamoDbDocumentModel
                        {
                            DocumentId = doc["id"].S,
                            ObjectId = doc["s3_file_id"].S,
                            DocumentOwner = doc["document_owner"].S,
                            CanDecrypt = doc["can_decrypt"].S,
                            AuthorisedUsers = doc["authorised_users"].SS
                        });
                });
            }
        }
        catch (AmazonDynamoDBException e)
        {
            // error handling
            throw e;
        }
        
        return responseModel;
    }
}
```

The query is returning all `Documents` that it finds in the [Global Secondary Index](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GSI.html) where the `document_owner` value matches the `User` property specified on our `Query` object.  More on this later.

I will show one more example before I explain where the DynamoDB table, and indexes etc came from.

The `GetDocumentsFromDynamoDbByS3ObjectIdQuery` query which will return all the `Documents` that are associated to an S3 `ObjectId`.


```
public class GetDocumentsFromDynamoDbByS3ObjectIdQuery : Query<GetDocumentsFromDynamoDbByS3ObjectIdQueryResponseModel>
{
    public string ObjectId { get; set; }
    public string TableName { get; } = "vault";
}
```

You will notice except for the name, the model we return here is identical as in the previous example. 


```
public class GetDocumentsFromDynamoDbByS3ObjectIdQueryResponseModel
{
    public List<DynamoDbDocumentModel> Documents { get; set; }

    public GetDocumentsFromDynamoDbByS3ObjectIdQueryResponseModel() => Documents = new List<DynamoDbDocumentModel>();

    ~GetDocumentsFromDynamoDbByS3ObjectIdQueryResponseModel() => Documents = null;
}
```

And finally the `GetDocumentsFromDynamoDbByS3ObjectIdQueryHandler`.  

```
public class GetDocumentsFromDynamoDbByS3ObjectIdQueryHandler : IQueryHandler<GetDocumentsFromDynamoDbByS3ObjectIdQuery, GetDocumentsFromDynamoDbByS3ObjectIdQueryResponseModel>
{
    private IDynamoDbClientFactory DynamoDbClientFactory { get; }

    public GetDocumentsFromDynamoDbByS3ObjectIdQueryHandler(IDynamoDbClientFactory dynamoDbClientFactory) => DynamoDbClientFactory = dynamoDbClientFactory;

    public async Task<GetDocumentsFromDynamoDbByS3ObjectIdQueryResponseModel> HandleAsync(GetDocumentsFromDynamoDbByS3ObjectIdQuery query)
    {
        var request = new QueryRequest
        {
            TableName = query.TableName,
            IndexName = "s3-index",
            KeyConditionExpression = "s3_file_id = :object_id",
            ExpressionAttributeValues = new Dictionary<string, AttributeValue>
            {
                { ":object_id", new AttributeValue($"{query.ObjectId}") }
            }
        };

        var responseModel = new GetDocumentsFromDynamoDbByS3ObjectIdQueryResponseModel();
        try
        {
            using (var client = DynamoDbClientFactory.Create())
            {
                var response = await client.QueryAsync(request);
                
                response.Items.ForEach(doc => responseModel.Documents.Add(new DynamoDbDocumentModel
                {
                    DocumentId = doc["id"].S,
                    DocumentOwner = doc["document_owner"].S
                }));
            }
        }
        catch (AmazonDynamoDBException e)
        {
            // exception handling
            throw e;
        }
        
        return responseModel;
    }
}
```

The implementation here is very close the previous example.  The important differences here are the `IndexName` and the field we are comparing.  Other than that, the code is almost identical in every way.  I really love this about CQRS.
Code is very easy to read, very self documenting, and results in a very well organised solution structure.


### API 

So now let's implement another controller action, which let's us look for documents/objects relating to a user.

```
private readonly ICommandHandler<SaveObjectToS3Command> _saveS3ObjectCommandHandler;
private readonly ICommandHandler<SaveDocumentToDynamoDbCommand> _saveDynamoDbDocumentCommandHandler; 

private readonly IQueryHandler<GetDocumentsFromDynamoDbByUserQuery, GetDocumentsFromDynamoDbByUserQueryResponseModel> _getDynamoDbDocumentByUserQueryHandler;

public ObjectController(
    ICommandHandler<SaveObjectToS3Command> saveS3ObjectCommandHandler,
    ICommandHandler<SaveDocumentToDynamoDbCommand> saveDynamoDbDocumentCommandHandler,
    IQueryHandler<GetDocumentsFromDynamoDbByUserQuery, GetDocumentsFromDynamoDbByUserQueryResponseModel> getDynamoDbDocumentByUserQueryHandler
    )
{
    _saveS3ObjectCommandHandler = saveS3ObjectCommandHandler;
    _saveDynamoDbDocumentCommandHandler = saveDynamoDbDocumentCommandHandler;
    
    _getDynamoDbDocumentByUserQueryHandler = getDynamoDbDocumentByUserQueryHandler;
}

[HttpGet("user/{userId}")]
public async Task<IActionResult> GetObjects(string userId) 
{
    var query = new GetDocumentsFromDynamoDbByUserQuery
    {
        User = userId
    };

    var documents = await _getDynamoDbDocumentByUserQueryHandler.HandleAsync(query);

    return StatusCode(200, documents);
};
```

Again you can see this is really simple, and easy to follow code.  Don't worry about the number of command/query handlers we are injecting in.  We will refactor this later.

### Terraform

So how did we get our DynamoDB table and our S3 bucket in the first place?  The answer is Terraform.  You may remember I explained some Terraform in an earlier [post](/blog/02-getting-vault-into-fargate.md) but that was to cover the infrastructure.  Load Balancers, ECS etc.

#### S3 Bucket

The S3 bucket is created with the following simple piece of Terraform.  This will create a bucket, denying all access by default.  It will also enable serverside encryption at rest, using the key were created in KMS.

```
resource "aws_s3_bucket" "vault-bucket" {
  bucket = "vault"
  region = "${var.region}"

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Deny ALL access to bucket",
      "Action": "s3:*",
      "Effect": "Deny",
      "Principal": {
        "Service": "s3.amazonaws.com"
      },
      "Resource": [
        "arn:aws:s3:::vault",
        "arn:aws:s3:::vault/*"
      ]
    }
  ]
}
EOF

  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        kms_master_key_id = "${aws_kms_key.vault-key.arn}"
        sse_algorithm     = "aws:kms"
      }
    }
  }

  tags {
    Name = "Vault"
  }
}
``` 

#### DynamoDB Table

The Terraform below will create a table for our `Documents`.  I defined the hash_key as `id` and the range_key as `document_owner`.  This essentially means we have a composite key of id+document_owner.

The problem with this is I cannot query documents because I do not know the `id` values. I need to query based on document_owner.  This is why I also created a `global_secondary_index`.  This uses `document_owner` as the hash_key.  This allowed me to search all documents that belong to the `document_owner` I supply.

This is perfect for our `GetDocumentsFromDynamoDbByUserQuery` query.

I then create another `global_secondary_index` this time using `s3_file_id` which is the `ObjectId` of the users object stored in S3.  

This index is then used to power the `GetDocumentsFromDynamoDbByS3ObjectIdQuery` query.
  

```
resource "aws_dynamodb_table" "vault-table" {
  name     = "vault"
  hash_key = "id"
  range_key = "document_owner"

  read_capacity  = 1
  write_capacity = 1

  attribute {
    name = "id"
    type = "S"
  }
  
  attribute {
    name = "document_owner"
    type = "S"
  }

  global_secondary_index {
    hash_key           = "document_owner"
    name               = "gsi"
    projection_type    = "INCLUDE"
    non_key_attributes = ["can_decrypt", "authorised_users", "s3_file_id", "s3_file_name", "s3_file_size"]
    read_capacity      = 1
    write_capacity     = 1
  }

  global_secondary_index {
    hash_key           = "s3_file_id"
    name               = "s3-index"
    projection_type    = "ALL"
    read_capacity      = 1
    write_capacity     = 1
  }

  server_side_encryption {
    enabled = true
  }

  tags {
    Name = "Vault"
  }
}
```

One final note.  Server side encryption is also enabled on the DynamoDB table. However I do not think you can choose to use your own keys yet through Terraform.  At least when I was looking a couple of weeks ago.  Hopefully this has changed, or will change soon.

### Wrapping Up

That's been quite a post and covers quite a log of the API so far.  I will write one more post on the API next time.  Just putting it all together. So you can see the complete workings of the API.  

If you've been paying attention you will have noticed that I have not yet shown you how to delete an `Object` and associated `Documents`.  This uses a combination of `Queries` & `Commands`.