import React, { Component } from 'react';

import css from './resume-statement.css';

export default class ResumeStatement extends Component{

    render() {
        return (
            <div className={css.statement}>
                <h2>personal statement</h2>

                <p>As a seasoned developer with almost two decades in the software industry.  I am able to call upon my extensive experience and quickly identify, recommend and build solutions for your business.</p>

                <p>My excitement and passion for technology is still as strong today as it was when I was starting out, which has led me to my latest position as principal software engineer.</p>

                <p>A natural software leader, I've repeatedly led my teams when building new solutions which utilise a wide variety of the cutting edge technologies available in todays modern, mobile-first, cloud-first world. </p>

                <p>Whilst my primary focus is the technology.  I have proven myself capable of identifying and introducing new non-technical concepts, that have formed key business strategies.</p>
            </div>
        );
    }

}