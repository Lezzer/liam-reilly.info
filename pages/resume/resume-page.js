import React from "react";
import Head from "next/head";
import SiteContainer from "../../components/site-container";
import Header from "../../components/header";
import Footer from "../../components/footer";
import StyledResumePage from "./resume-page.styled";
import Resume from "../../components/resume";
import Page from "../../components/page";

const PageResume = () => (
    <React.Fragment>
        <Head>
            <title>Liam Reilly - Resume</title>
        </Head>
        <SiteContainer>
            <Header/>
            <Page>
                <StyledResumePage>
                    <Resume/>
                </StyledResumePage>
            </Page>
            <Footer/>
        </SiteContainer>
    </React.Fragment>
);


export default PageResume