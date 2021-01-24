import React from "react"
import StyledContactIcon from "./contact-icon.styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactIcon = ({url, logo, text}) => <StyledContactIcon>
    <a href={url} target={"_blank"}>
        <div className={"circle"}>
            <div>
                <FontAwesomeIcon icon={logo} spin={false} />
            </div>
            <div className={"brand_label"}>
                <span>{text}</span>
            </div>
        </div>
    </a>
</StyledContactIcon>

export default ContactIcon