import React from "react";
import Head from "next/head";
import Header from "../../components/header"
import Footer from "../../components/footer"
import ContactIcons from "../../components/contact-icons"
import StyledContactPage from "./contact-page.styled"
import SiteContainer from "../../components/site-container";

const ContactPage = () => (
    <React.Fragment>
        <Head>
            <title>Contact Me:  liam-reilly.info</title>
        </Head>
        <SiteContainer>
            <Header/>
            <StyledContactPage>
                <h1 className={"title"}>Get in touch</h1>
                <ContactIcons/>
            </StyledContactPage>
            <Footer/>
        </SiteContainer>
    </React.Fragment>
);

export default ContactPage;