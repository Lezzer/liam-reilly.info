import React from "react";
import Head from "next/head";
import SiteContainer from "../../components/site-container";
import Header from "../../components/header";
import Page from "../../components/page";
import Post from "../../components/post";
import Markdown from "../../components/markdown/markdown";

const Index = ({ day, month, year, title, link, content }) => (
    <React.Fragment>
        <Head>
            <title>Blog: liam-reilly.info</title>
        </Head>
        <SiteContainer>
            <Header/>
            <Page>
                <Post
                    day={ day }
                    month={ month }
                    year={ year }
                    title={ title }
                    link={ {
                        post_text: link?.post_text,
                        url: link?.url,
                        url_text: link?.url_text,
                        external: link?.external
                    } }
                >
                    {
                        <Markdown source={ content }/>
                    }
                </Post>)
            </Page>
        </SiteContainer>
    </React.Fragment>
);

export default Index