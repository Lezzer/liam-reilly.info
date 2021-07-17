import React from "react";
import Head from "next/head";
import Header from "../components/header"
import Footer from "../components/footer"
import SiteContainer from "../components/site-container";
import Page from "../components/page";
import Blog from "../components/blog";

const Index = () => (
    <React.Fragment>
        <Head>
            <title>liam-reilly.info</title>
        </Head>
        <SiteContainer>
            <Header/>
            <Page>
                <Blog
                    year="2021"
                    month="none"
                />
            </Page>
            <Footer/>
        </SiteContainer>
    </React.Fragment>
);

export default Index;