import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/fontawesome-free-brands';
import { faEnvelope } from '@fortawesome/fontawesome-free-solid';
import css from './contact-icons.css';

export default class ContactIcons extends Component
{
    render() {
        return (
            <div className={css.contact_icon}>
                <div>
                    <a href={"https://www.linkedin.com/in/liam-reilly-84256437/"} target={"_blank"}>
                        <div className={css.circle}>
                            <div>
                                <FontAwesomeIcon icon={faLinkedinIn} spin={false} />
                            </div>
                            <div className={css.brand_label}>
                                <span>LinkedIn</span>
                            </div>
                        </div>
                    </a>
                    <a href={"mailto:website.enquiry@liam-reilly.info"} target={"_blank"}>
                        <div className={css.circle}>
                            <div>
                                <FontAwesomeIcon icon={faEnvelope} spin={false} />
                            </div>
                            <div className={css.brand_label}>
                                <span>Email</span>
                            </div>
                        </div>
                    </a>
                </div>
                <div>
                    <a href={"https://twitter.com/___lezzer___"} target={"_blank"}>
                        <div className={css.circle}>
                            <div>
                                <FontAwesomeIcon icon={faTwitter} spin={false} />
                            </div>
                            <div className={css.brand_label}>
                                <span>Twitter</span>
                            </div>
                        </div>
                    </a>

                    <a href={"https://www.instagram.com/___lezzer___/"} target={"_blank"}>
                        <div className={css.circle}>
                            <div>
                                <FontAwesomeIcon icon={faInstagram} spin={false} />
                            </div>
                            <div className={css.brand_label}>
                                <span>Instagram</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}