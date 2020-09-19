import React, { Component } from 'react';
import Update from "./Update/update";

export default class Home extends Component
{
    render() {
        return (
            <div>
                <Update
                    month={"Aug"}
                    day={"27"}
                    title={"Update"}
                    content={[
                        "It's been a long time since I gave an update on here but things have been going from strength to strength.",
                        "Around 18 months ago I launched my own company Alchemist Labs which has been my day job ever since.",
                        "We have a super top-secret new product in the works, and a new website to launch soon.",
                        "More details to follow..."
                    ]}
                    link={{post_text: "You can find ALCHEMIST LABS ", url: "http://www.alchemistlabs.tech/", url_text: "here"}}
                />
            </div>
        );
    }
}