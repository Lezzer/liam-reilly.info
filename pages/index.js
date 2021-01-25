import React from "react";
import Head from "next/head";
import Header from "../components/header"
import Footer from "../components/footer"
import Post from "../components/post"
import SiteContainer from "../components/site-container";
import StyledIndexPage from "./index.styled";

const Index = () => (
    <React.Fragment>
        <Head>
            <title>liam-reilly.info</title>
        </Head>
        <SiteContainer>
            <Header/>
            <StyledIndexPage>
                <Post
                    month={"Jan"}
                    day={"23"}
                    year={"2021"}
                    title={"Website rebuild!"}
                    content={[
                        "Although this site looks almost identical to how it has before, it's actually a completely new website.",
                        "It was originally built in early 2018 and was pretty neglected for a long time.",
                        "The website has now been re-built using the very latest versions of NextJS & React.",
                        "I intend to use this website a lot more going forward as I reduce my big tech/social media and bring more content to the web on a platform I build myself.",
                        "Micro blogging and images will be amongst the first of the new features to arrive sometime this year (hopefully).",
                        "But this is depending largely how much free time I can find when I'm not building products/websites for my business Alchemist Labs.",
                        "Stay tuned!"
                    ]}
                    link={{ post_text: "You can find ALCHEMIST LABS ", url: "http://www.alchemistlabs.tech/", url_text: "here" }}
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
            </StyledIndexPage>
            <Footer/>
        </SiteContainer>
    </React.Fragment>
);

export default Index;