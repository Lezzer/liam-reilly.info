import React, { Component } from 'react';
import NewBlogPost from "./new-blog-post";

export default class Home extends Component
{
    render() {
        return (
            <div>
                <NewBlogPost 
                    month={"May"} 
                    day={"22"} 
                    title={"At long last... liam-reilly.info is born!"}
                    content={[
                        "After much procrastination, the website is finally here!",
                        "Not much to see just yet, but blog posts will be coming thick and fast!",
                        "Feel free to have a look around, and get in touch to talk about projects :)",
                        "Cheers, Liam"
                    ]}
                />
            </div>
        );
    }
}