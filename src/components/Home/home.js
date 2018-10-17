import React, { Component } from 'react';
import Post from "./Post/post";

export default class Home extends Component
{
    render() {
        return (
            <div>
                <Post
                    month={"Oct"}
                    day={"17"}
                    title={"Summers are great and all but..."}
                    content={[
                        "Have you ever tried getting any work done?!",
                        "I've had a very busy and exciting summer with awesome family holidays and trips to theme parks.",
                        "Plus I've been pretty busy with the new job which I love!",
                        "But that hasn't left much time to concentrate on this website but now it's time to get this site launched properly.",
                        "So blog content will be coming very soon!",

                    ]}
                    link={{post_text: "Peace!", url: "", url_text: ""}}
                />
                
                <Post
                    month={"July"}
                    day={"05"}
                    title={"Website now deployed automatically via CircleCI"}
                    content={[
                        "So I've learned a thing or two about CircleCI in the last two days.",
                        "From never having used it before the website code is now automatically built, tested and deployed.",
                        "There will definitely be a detailed blog post on this, as I made many mistakes and wasted a lot of time.",
                        "Hopefully you can avoid repeating my mistakes!"
                    ]}
                    link={{post_text: "Cheers Liam", url: "", url_text: ""}}
                />
                
                <Post
                    month={"July"}
                    day={"03"}
                    title={"Resume Update!"}
                    content={[
                        "Made a few small tweaks to the resume page today, in light of me accepting a new job!",
                        "I'm very happy to report that I am now a Principal Software Engineer for Ditto Music.",
                        "And do we have some bold plans for the future...",
                        "Time to change the music industry!"
                    ]}
                    link={{post_text: "You can check Ditto out ", url: "https://www.dittomusic.com/", url_text: "here"}}
                />
                
                <Post
                    month={"June"}
                    day={"28"}
                    title={"Quickly adding all the things!"}
                    content={[
                        "Added a few new bits to the site today.",
                        "You should notice the website now has it's very own fancy favicon. How very modern!",
                        "And there is a fancy new 404 Not Found page for when you hit a bad URL."
                    ]}
                    link={{post_text: "You can try it out  ", url: "/not-found/", url_text: "here"}}
                />
                
                <Post
                    month={"June"}
                    day={"27"}
                    title={"A tale of two fevers!"}
                    content={[
                        "So after losing dev time to the flu (fever 1) and then the world cup starting (fever 2), work has finally continued on the website.",
                        "No big visible changes yet, but plenty behind the scenes improvements & bug fixes. Including SSL support (HTTPS), and fixing an issue with routing.",
                        "There is still a bunch of things I want to do before I start blogging, but hopefully that won't take too much longer, and I can start adding blogs soon.",
                    ]}
                    link={{post_text: "Cheers, Liam", url: "", url_text: ""}}
                />
                
                <Post 
                    month={"May"} 
                    day={"22"} 
                    title={"At long last... liam-reilly.info is born!"}
                    content={[
                        "After much procrastination, the website is finally here!",
                        "Not much to see just yet, as I am still busy getting things ready.",
                        "My resume is available to view & print directly from the website, and the contact page has all my online social accounts / email etc.",
                        "I will be working frantically on blog post content, so this will be appearing thick and fast!",
                        "Feel free to have a look around, and get in touch :)",
                    ]}
                    link={{post_text: "You will be able to find blog posts ", url: "/blog/", url_text: "here"}}
                />
            </div>
        );
    }
}