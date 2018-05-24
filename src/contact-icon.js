import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/fontawesome-free-brands';
import { faEnvelope } from '@fortawesome/fontawesome-free-solid';
import css from './styles/contact-icon.css';

export default class ContactIcon extends Component
{
    render() {
        return (
            <div className={css.contact_icon}>
                
                <a href={"https://www.instagram.com/___lezzer___/"}>
                    <div className={css.circle}>
                        <div>
                            <FontAwesomeIcon icon={faInstagram} spin={false} />
                        </div>
                        <div>
                            <span>Instagram</span>
                        </div>
                    </div>
                </a>
                
                <a href={"https://twitter.com/___lezzer___"}>
                    <div className={css.circle}>
                        <div>
                            <FontAwesomeIcon icon={faTwitter} spin={false} />
                        </div>
                        <div>
                            <span>Twitter</span>
                        </div>
                    </div>
                </a>
                
                <a href={"mailto:liam.reilly.1@gmail.com"}>
                    <div className={css.circle}>
                        <div>
                            <FontAwesomeIcon icon={faEnvelope} spin={false} />
                        </div>
                        <div>
                            <span>Email</span>
                        </div>
                    </div>
                </a>
            </div>
        );
    }
}