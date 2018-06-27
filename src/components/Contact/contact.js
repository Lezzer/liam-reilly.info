import React, { Component } from 'react';
import css from './contact.css';
import ContactIcons from "./Icons/contact-icons";

export default class Contact extends Component
{
    render() {
        return (
            <div className={css.contact}>

                <h1>Hit me up on social media / email</h1>
                
                <ContactIcons />
                
            </div>
        );
    }
}