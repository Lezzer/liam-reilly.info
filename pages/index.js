import React from "react";
import Head from "next/head";
import Header from "../components/header"
import Footer from "../components/footer"
import Post from "../components/post"
import SiteContainer from "../components/site-container";
import Page from "../components/page";

const Index = () => (
    <React.Fragment>
        <Head>
            <title>liam-reilly.info</title>
        </Head>
        <SiteContainer>
            <Header/>
            <Page>
                <Post
                    month={"May"}
                    day={"03"}
                    year={"2021"}
                    title={"Google... FLoC off!"}
                    content={[
                        "Just a quick update.  I added the headers to the site which opt out of Google's invasive Federated Learning of Cohorts (FLoC)."
                    ]}
                    link={{ post_text: "You can learn more about FLoC ", url: "https://www.eff.org/deeplinks/2021/03/googles-floc-terrible-idea", url_text: "here", external: true }}
                />
                <Post
                    month={"May"}
                    day={"02"}
                    year={"2021"}
                    title={"Books!"}
                    content={[
                        "I've been reading a lot this year. I like to start each day reading a chapter or two of a book rather than doom scroll social media. I find myself to be much happier and productive when I do this!",
                        "Because I'm reading so many books now I wanted a way to keep track so I figured why not use this website to keep track. So today I've added a new books page, with a simple timeline showing the books I've read so far in 2021.",
                        "It's very simple for now but I plan to expand it and make it a bit more useful in the future.",
                        "Please take a look and get in touch if you have any recommendations or want to talk about something I've read."

                    ]}
                    link={{ post_text: "See the books I've been reading ", url: "/books", url_text: "here" }}
                />
                <Post
                    month={"Jan"}
                    day={"27"}
                    year={"2021"}
                    title={"New Website!"}
                    content={[
                        "After years of neglect I decided to completely rebuild and slightly re-design this website.",
                        "The website has now been re-built using the very latest versions of NextJS & React.",
                        "I intend to use this website a lot more going forward as I reduce my big tech/social media and bring more content to the web on a platform I build myself.",
                        "Micro blogging and images will be amongst the first of the new features to arrive sometime this year (hopefully).",
                        "But this is depending largely how much free time I can find when I'm not building products/websites for my business Alchemist Labs.",
                        "Stay tuned!"
                    ]}
                    link={{ post_text: "CHECK OUT ", url: "http://www.alchemistlabs.tech/", url_text: "ALCHEMIST LABS" }}
                />
                <Post
                    month={"Aug"}
                    day={"27"}
                    year={"2020"}
                    title={"Update"}
                    content={[
                        "It's been a long time since I gave an update on here but things have been going from strength to strength.",
                        "Around 18 months ago I launched my own company Alchemist Labs which has been my day job ever since.",
                        "We have a super top-secret new product in the works, and a new website to launch soon.",
                        "More details to follow..."
                    ]}
                    link={{ post_text: "You can find ALCHEMIST LABS ", url: "http://www.alchemistlabs.tech/", url_text: "here" }}
                />
            </Page>
            <Footer/>
        </SiteContainer>
    </React.Fragment>
);

export default Index;