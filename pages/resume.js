import React from "react";
import Head from "next/head";
import SiteContainer from "../components/site-container";
import Header from "../components/header";
import Footer from "../components/footer";
import Resume from "../components/resume";
import Page from "../components/page";

const ResumePage = () => (
    <React.Fragment>
        <Head>
            <title>Liam Reilly - Resume</title>
        </Head>
        <SiteContainer>
            <Header/>
            <Page>
                <Resume/>
            </Page>
            <Footer/>
        </SiteContainer>
    </React.Fragment>
);


export default ResumePage