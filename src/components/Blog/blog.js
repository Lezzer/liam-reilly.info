import React, { Component } from 'react';
import PostNotification from './PostNotification/post-notification';

export default class Blog extends Component
{
    render() {
        return (
            <div>
                <PostNotification 
                    month={"Nov"} 
                    day={"21"} 
                    title={"Why I love ten percent time!"}
                    content={[
                        "You may or may not know that I recently changed jobs.  I'm now a Principal Software Engineer now at Ditto Music.",
                        "I was brought in, along with a couple of other friends (we've all worked together previously) to form a new team to build a completely new cloud infrastructure in AWS, and design and build all new systems/services to allow the company to grow and scale."
                    ]}
                    link={"/blog/00-ten-percent-time-intro.md"}
                />
            </div>
        );
    }
}