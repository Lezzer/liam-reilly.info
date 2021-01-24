import React from "react"
import StyledContactIcons from "./contact-icons.styled"
import { faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/fontawesome-free-brands';
import { faEnvelope } from '@fortawesome/fontawesome-free-solid';
import ContactIcon from "../contact-icon"

const ContactIcons = () => <StyledContactIcons>
    <ContactIcon
        url={"https://www.linkedin.com/in/liam-reilly-84256437/"}
        text={"LinkedIn"}
        logo={faLinkedinIn}
    />
    <ContactIcon
        url={"mailto:website.enquiry@liam-reilly.info"}
        text={"Email"}
        logo={faEnvelope}
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
</StyledContactIcons>

export default ContactIcons