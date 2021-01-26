import React from "react";
import Head from "next/head";
import Header from "../../components/header"
import Footer from "../../components/footer"
import SiteContainer from "../../components/site-container";
import Page from "../../components/page";
import StyledContactPage from "./contact-page.styled";
import ContactIcon from "../../components/contact-icon";
import {faInstagram, faLinkedinIn, faMastodon, faTwitter} from "@fortawesome/fontawesome-free-brands";
import {faEnvelope} from "@fortawesome/fontawesome-free-solid";

const ContactPage = () => (
    <React.Fragment>
        <Head>
            <title>Contact Me:  liam-reilly.info</title>
        </Head>
        <SiteContainer>
            <Header/>
            <Page>
                <StyledContactPage>
                    <h1 className={"title"}>Get in touch!</h1>

                    <div className={"icons"}>
                        <ContactIcon
                            url={"https://www.linkedin.com/in/liam-reilly-84256437/"}
                            text={"LinkedIn"}
                            logo={faLinkedinIn}
                        />
                        <ContactIcon
                            url={"https://fosstodon.org/@liam_reilly"}
                            text={"Mastodon"}
                            logo={faMastodon}
                        />
                        <ContactIcon
                            url={"https://twitter.com/ragingnull"}
                            text={"Twitter"}
                            logo={faTwitter}
                        />
                        <ContactIcon
                            url={"https://www.instagram.com/___lezzer___/"}
                            text={"Instagram"}
                            logo={faInstagram}
                        />
                        <ContactIcon
                            url={"mailto:website.enquiry@liam-reilly.info"}
                            text={"Email"}
                            logo={faEnvelope}
                        />
                    </div>
                </StyledContactPage>
            </Page>
            <Footer/>
        </SiteContainer>
    </React.Fragment>
);

export default ContactPage;