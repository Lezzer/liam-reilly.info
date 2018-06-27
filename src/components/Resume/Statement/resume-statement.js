import React, { Component } from 'react';

import css from './resume-statement.css';

export default class ResumeStatement extends Component{

    render() {
        return (
            <div className={css.statement}>
                <h2>personal statement</h2>

                <p>As a seasoned developer with over a decade in the software industry, I am able to call upon my extensive experience and quickly identify, recommend and build solutions for your business.</p>

                <p>My excitement and passion for technology is still as strong today as it was when I was starting out, which has naturally led me on the path of aspiring to become a principal software engineer.</p>

                <p>A natural software leader, I've repeatedly led my teams when building new solutions which utilise new technologies available in todays modern, mobile-first, cloud-first world. </p>

                <p>Whilst my focus is primarily technology, I have also proven capable of identifying and suggesting new non-technical concepts, that have formed completely new key business strategies.</p>

                <p>I am looking now to my future, to step up and become a principal engineer officially, where I hope to lead and inspire people to build exciting new technical solutions utilising cloud, serverless and container based solutions.</p>
            </div>
        );
    }

}