---
# Work on the Vault has begun!
---

It's 10% day again this Friday and I will be continuing on with Vault! I did a little work 2 weeks ago, but it's been mostly setting things up, and design work so far.
But now that's all out the way, it's full steam ahead with coding coding coding come Friday!

Before we get into that though, I think I should explain what I have decided to do.

> Vault - A super simple, easy to use, web based, secure secrets app.

I'm basically building a simple system to allow people to securely encrypt and save things like passwords and documents, which they can then later retrieve when they need to.

### Frontend

So I've decided to build a fancy web application using [React](https://reactjs.org/). This will be super simple.  I envisage a huge search bar which a user types into, and any credentials/objects they've got access to view/decrypt will be displayed on screen. Filtered in real time as they type, with options to view/download.

I see just a couple of options

* Add
* Browse

When the user clicks Add, they will have a very simple screen with just a few options. They will be able to create a name/description. They will be able to type a secure string (either a simple password type of string, or a larger piece of text), or attach a file.

When it comes to who can decrypt the document/object again, they will have 3 options to choose from

1. Just Me
2. Everyone
3. These Users

I think this makes the app quite flexible, and allows the app to be used in a number of different ways. Users can use the app for personal password, or they can add credentials/files to the system and allow other people to later retrieve from the store. This might be any other user of the system, or it could be limited to just a select few.

I did consider adding roles/user groups etc, but I really don't want to deal with the additional complexity and ongoing maintenance that this path brings.

### Backend 

The front end web app will be powered by an API on the backend. This will be WebAPI project, written in C# .NET Core 2.2. 

This will be where all the work is done, such as encrypting objects and persisting to the database/object store, and retrieving/decrypting again and sending back to the end user.

I've decided to use AWS [Fargate](https://aws.amazon.com/fargate/) to host the API. I expect the application to get quite a lot of regular use, so [Lambda](https://aws.amazon.com/lambda/) didn't seem to make as much sense. 

Also this means I can just use a regular Application Load Balancer to route to my application and don't have to ~~fight~~ mess around with [API-Gateway](https://aws.amazon.com/api-gateway/).

When it comes to storing objects I've opted for a 2 fold approach. I am going to use [DynamoDB](https://aws.amazon.com/dynamodb/) to store simple objects, such as passwords and small pieces of text. For storing larger objects I am going to use [S3](https://aws.amazon.com/s3/). These will still have a document in DynamoDB, but this document will include a link to the object in S3.

All documents/objects will be encrypted at rest using a key which will be managed via [KMS](https://aws.amazon.com/kms/).

### What I've done so far

So far I've set up a basic WebAPI project, with build and test scripts, and I've written some a bit of terraform to create some things in AWS.

I built a pipeline in [GOCD](https://www.gocd.org/) which builds and tests the WebAPI project, reviews and applies the terraform to create resources in AWS, and finally deploys the app into Fargate.

I also now have a master key in KMS which will be used to encrypt and decrypt documents and objects.

I will be explaining the terraform in the next post, which will be up in the next couple of days. I was going to include it in this post but this has gotten longer than I expected and there is quite a bit to go through.

Stay tuned for part 3!

[Part One](/blog/00-ten-percent-time-intro.md) <----> [Part Three](/blog/02-getting-vault-into-fargate.md)