import React, { Component } from 'react';
import NewBlogPost from "../NewBlogPost/new-blog-post";

export default class Home extends Component
{
    render() {
        return (
            <div>
                <NewBlogPost
                    month={"June"}
                    day={"27"}
                    title={"A tale of two fevers!"}
                    content={[
                        "So after losing dev time to the flu (fever 1) and then the world cup starting (fever 2), work has finally continued on the website.",
                        "No big visible changes yet, but plenty behind the scenes improvements & bug fixes. Including SSL support (HTTPS), and fixing an issue with routing.",
                        "There is still a bunch of things I want to do before I start blogging, but hopefully that won't take too much longer, and I can start adding blogs soon.",
                        "Cheers, Liam"
                    ]}
                />
                
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