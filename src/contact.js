import React, { Component } from 'react';
import css from './styles/contact.css';
import ContactIcon from "./contact-icon";

export default class Contact extends Component
{
    render() {
        return (
            <div className={css.contact}>

                <h1>Hit me up on social media / email</h1>
                
                <ContactIcon />
                
            </div>
        );
    }
}