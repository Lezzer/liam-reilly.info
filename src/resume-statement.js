import React, { Component } from 'react';

import css from './styles/resume-statement.css';

export default class ResumeStatement extends Component{

    render() {
        return (
            <div className={css.statement}>
                <h2>personal statement</h2>

                <p>As a seasoned developer with over a decade in the software industry, I am able to call upon my extensive experience and quickly identify, recommend and build solutions for your business.</p>

                <p>My excitement and passion for technology is still as strong today as it was when I was starting out, which has naturally led me on the path of aspiring to become a principal software engineer.</p>

                <p>I’m a natural leader in the software squads that I have worked in.  I have been very effective with combining todays cloud offerings, with my attitude to learning and building modern software solutions to repeatedly introduce new platforms/techniques to the businesses which I have worked in, and to the team members I have worked with.</p>

                <p>Whilst my approach is primarily from a technical angle, I have also proven capable of identifying and suggesting new non-technical concepts, that have formed completely new key business strategies.</p>

                <p>I am looking forward now to my next move, where I can hopefully lead and inspire people to build exciting new technical solutions utilising cloud, serverless and container based solutions.</p>

            </div>
        );
    }

}