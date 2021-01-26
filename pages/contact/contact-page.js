import React from "react";
import Head from "next/head";
import Header from "../../components/header"
import Footer from "../../components/footer"
import ContactIcons from "../../components/contact-icons"
import SiteContainer from "../../components/site-container";
import Page from "../../components/page";
import StyledContactPage from "./contact-page.styled";

const ContactPage = () => (
    <React.Fragment>
        <Head>
            <title>Contact Me:  liam-reilly.info</title>
        </Head>
        <SiteContainer>
            <Header/>
            <Page>
                <StyledContactPage>
                    <h1 className={"title"}>Get in touch</h1>
                    <ContactIcons/>
                </StyledContactPage>
            </Page>
            <Footer/>
        </SiteContainer>
    </React.Fragment>
);

export default ContactPage;