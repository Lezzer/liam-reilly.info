import React from "react";
import Head from "next/head";
import SiteContainer from "../components/site-container";
import Header from "../components/header";
import Footer from "../components/footer";
import ResumeComponent from "../components/resume";
import Page from "../components/page";

const Resume = () => (
    <React.Fragment>
        <Head>
            <title>Liam Reilly - Resume</title>
        </Head>
        <SiteContainer>
            <Header/>
            <Page>
                <ResumeComponent/>
            </Page>
            <Footer/>
        </SiteContainer>
    </React.Fragment>
);

export default Resume