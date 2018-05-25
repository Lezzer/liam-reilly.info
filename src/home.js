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
                        "Not much to see just yet, as I am still busy getting things ready.",
                        "My resume is available to view & print directly from the website, and the contact page has all my online social accounts / email etc.",
                        "I will be working frantically on blog post content, so this will be appearing thick and fast!",
                        "Feel free to have a look around, and get in touch :)",
                        "Cheers, Liam"
                    ]}
                />
            </div>
        );
    }
}