* * *

# CQRS and the API

* * *

In the previous post I concentrated on the resources required to host an API in [Fargate](https://aws.amazon.com/fargate/) on [AWS](https://aws.amazon.com/), and the [Terraform](https://www.terraform.io/) needed to create those resources.  

By the end of the post, whilst I had an API running inside of Fargate, accessible via a load balancer at `/vault` the API didn't yet do anything useful. 

So when I next sat down to work on Vault I decided to concentrate on implementing the API.

I wanted the API to allow the user to do a number of things.

1.  Upload a file
2.  Search for files they were allowed to access
3.  Delete file(s) they were allowed to access

I decided that files which were uploaded by a user would be persisted to Amazon Simple Storage Service or [S3](https://aws.amazon.com/s3/), where they would be encrypted at rest using a key I controlled in [KMS](https://aws.amazon.com/kms/).

Uploading and later deleting files stored in S3 was simple enough, but in order to provide a good user experience on the front end I needed to build some search functionality.  To achieve this I decided that I would also store a document pertaining to each users S3 object in [DynamoDB](https://aws.amazon.com/dynamodb/).

DynamoDB is a great NoSQL product provided by Amazon.  Using this I could easily build an extremely performant search feature bringing back references to both S3 objects that the user owned directly (had uploaded themselves), and also objects uploaded by other users who had chosen to grant access to other users.

### CQRS

As I thought about the way in which the user would interact with the API, it was obvious that the UX would be very task oriented.  The user uploads a file, the user deletes a file etc. Those are very clearly `Commands` which the user performs.  

Another use case for the API is to query/view/retrieve objects, which could be used to populate the UI for example.  This is very clearly a `Query` or a series of queries.

One pattern I've used before and really like for a number of reasons is [CQRS](https://en.wikipedia.org/wiki/Command%E2%80%93query_separation#Command_query_responsibility_segregation).

Whilst this pattern can be extremely complex and very hard to grok overall, in its most basic form it can be very simple to understand and to start using. 

The very distinct segregation of `commands` and `queries`, combined with the right folder structure across your code base, makes your code very self documenting. It's easy to see just from the file structure which classes will perform an action that does something (a command), and which classes will return something (a query).

When I started to implement the API I chose to do it very incrementally.  The first objective was to store a file in S3.  The accompanying document relating to this in DynamoDB could come later.

So the first `Command` I wanted to implement was `SaveObjectToS3Command`. 

In CQRS a command object is very deliberately named in a way to indicate it's intent.  A command itself is nothing more than a meta data representation of intent. Commands can be serialised and logged which can give a number of benefits not possible with other patterns.  It makes debugging issues easier, and you can see the exact content of commands the user tried to execute.  Also in the event of a system failure `Commands` can be replayed later.  Entire systems can be restored from scratch to a good working state just by replaying command histories!

But I digress, let's focus on the basic implementation for Vault. 

The `SaveObjectToS3Command` has four properties which will be set by the user. `Key`, `Description`, `Filename` and `Bytes`.

I also like to have two additional properties `CommandId` and `CommandName`.  These are useful for logging/debugging purposes.  These are the only properties specified on the `ICommand` interface.

```
public interface ICommand
{
    Guid CommandId { get; }
    string CommandName { get; }
}
```

The code below is the complete code for our command.

```
public class SaveObjectToS3Command : ICommand
{
    public Guid CommandId => Guid.NewGuid();
    public string CommandName => "SaveObjectToS3Command"

    public string Key { get; set; }
    public string Description { get; set; }
    public string Filename { get; set; }
    public byte[] Bytes { get; set; }
}
```

You may be wondering where its method is? How does it do anything. This can't be any use surely? 

As I said earlier, in CQRS each command is just the meta data needed to signal intent.  A command is then passed to a `CommandHandler` which will do the work.

I have the following `Interface` for handling commands

```
public interface ICommandHandler<in TCommand> where TCommand: ICommand
{
    Task HandleAsync(TCommand command);
}
```

which allows us to configure [IoC](https://en.wikipedia.org/wiki/Inversion_of_control) in a way that every concrete implementation of `ICommand` is handled by a specific `CommandHandler`.

Our `SaveObjectToS3CommandHandler` looks (roughly) like this:

```
public class SaveObjectToS3CommandHandler: ICommandHandler<SaveObjectToS3Command>
{
    private IS3ClientFactory S3ClientFactory { get; }
    private string BucketName { get; } = "vault-bucket";

    public SaveObjectToS3CommandHandler(IS3ClientFactory s3ClientFactory) => S3ClientFactory = s3ClientFactory;

    public async Task HandleAsync(SaveObjectToS3Command command)
    {
        var seekableStream = new MemoryStream(command.Bytes) { Position = 0 };
        
        var putRequest = new PutObjectRequest
        {
            BucketName = BucketName,
            Key = command.Key,
            InputStream = seekableStream,
            ServerSideEncryptionMethod = ServerSideEncryptionMethod.AWSKMS
        };
        putRequest.Metadata.Add("x-amz-meta-Description", command.Description);
        putRequest.Metadata.Add("x-amz-meta-Name", command.Filename);
        putRequest.Metadata.Add("x-amz-meta-Size", seekableStream.Length.ToString());

        try
        {
            using (var client = S3ClientFactory.Create()) 
                await client.PutObjectAsync(putRequest);
        }
        catch (AmazonS3Exception e)
        {
            // error handling.....
            throw e;
        }
    }
}
```

This takes the meta data from the `Command` creates an S3 `PutObjectRequest`, and awaits the operation to complete.  I have removed additional code such as logging/error handling for the purposes of this post.

Note:  You will notice the `IS3ClientFactory`.  This is just a simple factory object that creates a client that can talk to S3 using my S3 credentials.


### API

Now we have our basic `Command` and `CommandHandler` we need to use it.  For simplicity I will inject the `CommandHandler` into my API `ObjectController`, and use it an `Action`.

```
private readonly ICommandHandler<SaveObjectToS3Command> _saveS3ObjectCommandHandler;
 

public ObjectController(ICommandHandler<SaveObjectToS3Command> saveS3ObjectCommandHandler)
{
    _saveS3ObjectCommandHandler = saveS3ObjectCommandHandler;
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

    return StatusCode(200, s3ObjectKey);
}
```

This action simply takes the input from the user in the form of a JSON model.

```
public class UserObjectModelDto
{
    public string Description { get; set; }
    public string Data { get; set; }
    public string Filename { get; set; }
}
```

The data sent from the user, is then mapped onto our `SaveObjectToS3Command`, and passed to the `CommandHandler` via the `HandleAsync` method.  We then await for this operation to complete, and then return a `200 OK` response to the caller.  The response also contains the S3 object key.

Note:  The key is generated here in the API and returned to the user.  The key could just as easily have been generated by the client (caller).  The important thing to note is the Key was not generated by the Command/CommandHandler and then returned to the user.  Commands are fire and forget.  This is a much wider topic which I won't cover today. But CQRS systems rely on [Eventual Consistency](https://en.wikipedia.org/wiki/Eventual_consistency).  This command might not have executed here and now, but might be sat in a queue somewhere. But the user does not care about this!


### Other Commands

Implementing other commands is done in the exact same way.  The Vault API needs a 2nd `Command`. Enter `DeleteObjectFromS3Command`.

This command is even simpler.  The user only needs to pass an `ObjectId` for the object (file) which we stored in S3.

```
public class DeleteObjectFromS3Command : ICommand
{
    public Guid CommandId => Guid.NewGuid();
    public string CommandName => "DeleteObjectFromS3Command"
    
    public string ObjectId { get; set; }
}
```

Then the `CommandHandler` much like in the previous example looks like this.

```
public class DeleteObjectFromS3CommandHandler : ICommandHandler<DeleteObjectFromS3Command>
{
    private IS3ClientFactory S3ClientFactory { get; }
    private string BucketName { get; } = "vault-bucket";
    
    public DeleteObjectFromS3CommandHandler(IS3ClientFactory s3ClientFactory) => S3ClientFactory = s3ClientFactory;

    public async Task HandleAsync(DeleteObjectFromS3Command command)
    {
        var deleteRequest = new DeleteObjectRequest
        {
            BucketName = BucketName,
            Key = command.ObjectId
        };

        try
        {
            using (var client = S3ClientFactory.Create()) 
                await client.DeleteObjectAsync(deleteRequest);
        }
        catch (AmazonS3Exception e)
        {
            // error handling
            throw e;
        }
    }
}
```

The calling code in the API is again very similar.  We update the `ObjectController` to inject a second `CommandHandler` implementation and call again from a new `Action`.

```
[HttpDelete("delete/{objectId}")]
public async Task<IActionResult> DeleteObject(string objectId) 
{
    var s3ObjectCommand = new DeleteObjectFromS3Command
    {
        ObjectId = objectId
    };
    
    await _deleteS3ObjectCommandHandler.HandleAsync(s3ObjectCommand);

    return StatusCode(200);
}
```

This action compared to the previous action is much simpler.  We create the command, pass the `id` of the object we request be deleted, and await that to happen.  Then finally we return a `200 OK` response again.

### Wrapping Up

In this post you've learned the basics of `CQRS`.  Or at least the `Command` side of `CQRS` and how I've chosen to use it to store and to delete objects in S3.  In the next post, which should be posted up shortly.  I will introduce more commands which will store meta documents in DynamoDB, and also show you how I implemented some `Query` objects that aid these commands and allow a user to find things they are entitled to see.