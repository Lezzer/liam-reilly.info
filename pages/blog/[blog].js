import React from "react";
import Head from "next/head";
import { useRouter } from 'next/router'
import SiteContainer from "../../components/site-container";
import Header from "../../components/header";
import Page from "../../components/page";
import Post from "../../components/post";
import Markdown from "../../components/markdown/markdown";

const Blog = ({ content }) => {

    const router = useRouter()
    const { blog } = router.query

    return <>
        <Head>
            <title>Blog: liam-reilly.info</title>
        </Head>
        <SiteContainer>
            <Header/>
            <Page>
                <h1>{blog}</h1>


                <Markdown source={ content }/>

                {/*<Post*/}
                {/*    day={ day }*/}
                {/*    month={ month }*/}
                {/*    year={ year }*/}
                {/*    title={ title }*/}
                {/*    link={ {*/}
                {/*        post_text: link?.post_text,*/}
                {/*        url: link?.url,*/}
                {/*        url_text: link?.url_text,*/}
                {/*        external: link?.external*/}
                {/*    } }*/}
                {/*>*/}
                {/*    {*/}
                {/*        <Markdown source={ content }/>*/}
                {/*    }*/}
                {/*</Post>*/}
            </Page>
        </SiteContainer>
    </>;
};

export default Blog