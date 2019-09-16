import React, { Component } from 'react';
import Update from "./Update/update";

export default class Home extends Component
{
    render() {
        return (
            <div>
                <Update
                    month={"Sept"}
                    day={"16"}
                    title={"Website changes"}
                    content={[
                        "I have decided to remove the blog content from this site.",
                        "Going forward I shall be producing blog content over on the Alchemist Labs blog.",
                        "The blog has not launched yet but will be coming in the near future.",
                        "Owning and running a new business takes all my time now and it no longer makes sense to duplicate my effort.",

                    ]}
                    link={{post_text: "You can find Alchemist Labs ", url: "http://www.alchemistlabs.tech/", url_text: "here"}}
                />

                <Update
                    month={"Jul"}
                    day={"4"}
                    title={"Apologies. Big changes. Very busy!"}
                    content={[
                        "So a lot's happened since my last update.  I decided to leave the world of full time employment and start on my own adventure!",
                        "So back in February I decided to set up my own company - Alchemist Labs.",
                        "As you might expect this has kept me extremely busy and my Vault project fell to the back of my priorities list :(",
                        "It is still a product I want to use personally though so I will finish it eventually and write up the final blog pieces to complete the series.",
                        "If you read this please check out my company website and reach out if you think we could work together!"
                    ]}
                    link={{post_text: "You can find Alchemist Labs ", url: "http://www.alchemistlabs.tech/", url_text: "here"}}
                />

            </div>
        );
    }
}