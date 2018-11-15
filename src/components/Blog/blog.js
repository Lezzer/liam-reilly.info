import React, { Component } from 'react';
import PostNotification from './PostNotification/post-notification';
import css from './blog.css';

export default class Blog extends Component
{
    render() {
        return (
            <div className={css.blog}>
                
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