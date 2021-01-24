import React from "react";
import Head from "next/head";
import Header from "../../components/header"
import Footer from "../../components/footer"
import ContactIcons from "../../components/contact-icons"
import StyledContactPage from "./index.styled"

const Index = () => (
    <StyledContactPage>
        <Head>
            <title>Contact Me:  liam-reilly.info</title>
        </Head>
        <Header/>
        <h1 className={"title"}>Get in touch</h1>
        <ContactIcons/>
        <Footer/>
    </StyledContactPage>
);

export default Index;