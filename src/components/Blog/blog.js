import React, { Component } from 'react';
import PostNotification from './PostNotification/post-notification';

export default class Blog extends Component
{
    render() {
        return (
            <div>
                <PostNotification 
                    month={"Nov"} 
                    day={"15"} 
                    title={"My first blog post"}
                    content={[
                        "After a long wait the blog feature is finally live!"
                    ]}
                    link={"/blog/test.md"}
                />
            </div>
        );
    }
}