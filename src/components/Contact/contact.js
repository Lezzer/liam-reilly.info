import React, { Component } from 'react';
import ReactGA from 'react-ga';
import css from './contact.css';
import ContactIcons from "./Icons/contact-icons";

export default class Contact extends Component {
    componentDidMount() {
        ReactGA.pageview('/blog/');
    }
    
    render() {
        return (
            <div className={css.contact}>

                <h1>Hit me up on social media / email</h1>
                
                <ContactIcons />
                
            </div>
        );
    }
}