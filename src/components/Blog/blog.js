import React, { Component } from 'react';
import PostNotification from './PostNotification/post-notification';

export default class Blog extends Component
{
    render() {
        return (
            <div>
                <PostNotification
                    month={"Jan"}
                    day={"28"}
                    title={"CQRS and the API continued"}
                    content={[
                        "In the previous post I talked about the CQRS design pattern, and demonstrated a couple of Commands that I had implemented in the Vault API.",
                        "In this post I will add a couple of additional Commands but I will also show you how Queries work too.  I will end on a bit of Terraform for good measure :)"
                    ]}
                    link={"/blog/04-cqrs-and-the-api-continued.md"}
                />
                <PostNotification
                    month={"Jan"}
                    day={"22"}
                    title={"CQRS and the API"}
                    content={[
                        "In the previous post I concentrated on the resources required to host an API in Fargate in AWS, and the Terraform needed to create those resources.",
                        "By the end of the post, whilst I had an API running inside of Fargate, accessible via a load balancer at /vault.  The API didn't do anything useful yet.",
                        "So when I next sat down to work on Vault I decided to concentrate on implementing the API."
                    ]}
                    link={"/blog/03-cqrs-and-the-api.md"}
                />
                <PostNotification
                    month={"Dec"}
                    day={"17"}
                    title={"Getting the Vault API into Fargate!"}
                    content={[
                        "When I sat down to start building the Vault project there was a number of places I could have chosen to start. I could have started building the fancy React based UI, or I could have started by writing Terraform and putting some resources in my AWS account, things such as a DynamoDB table, or an S3 bucket."
                    ]}
                    link={"/blog/02-getting-vault-into-fargate.md"}
                />
                <PostNotification
                    month={"Dec"}
                    day={"11"}
                    title={"Work on the Vault has begun!"}
                    content={[
                        "It's 10% day again this Friday and I will be continuing on with Vault! I did a little work 2 weeks ago, but it's been mostly setting things up, and design work so far.",
                        "But now that's all out the way, it's full steam ahead with coding coding coding come Friday!",
                        "Before we get into that though, I think I should explain what I have decided to do."
                    ]}
                    link={"/blog/01-vault-work-begins.md"}
                />
                <PostNotification 
                    month={"Nov"} 
                    day={"21"} 
                    title={"Why I love ten percent time!"}
                    content={[
                        "You may or may not know that I recently changed jobs.  I'm now a Principal Software Engineer at Ditto Music.",
                        "I was brought in, along with a couple of other friends (we've all worked together previously) to form a new team to build a completely new cloud infrastructure in AWS, and design and build all new systems/services to allow the company to grow and scale."
                    ]}
                    link={"/blog/00-ten-percent-time-intro.md"}
                />
            </div>
        );
    }
}