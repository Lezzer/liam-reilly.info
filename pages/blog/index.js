import React from "react";
import Head from "next/head";
import SiteContainer from "../../components/site-container";
import Header from "../../components/header";
import Page from "../../components/page";

const Index = () => (
    <React.Fragment>
        <Head>
            <title>Blog:  liam-reilly.info</title>
        </Head>
        <SiteContainer>
            <Header/>
            <Page>
            </Page>
        </SiteContainer>
    </React.Fragment>
);

export default Index