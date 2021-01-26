import React from "react";
import Head from "next/head";
import SiteContainer from "../../components/site-container";
import Header from "../../components/header";
import Footer from "../../components/footer";
import StyledResumePage from "./resume-page.styled";
import Resume from "../../components/resume";

const PageResume = () => (
    <React.Fragment>
        <Head>
            <title>Resume:  liam-reilly.info</title>
        </Head>
        <SiteContainer>
            <Header/>
            <StyledResumePage>
                <Resume/>
            </StyledResumePage>
            <Footer/>
        </SiteContainer>
    </React.Fragment>
);


export default PageResume