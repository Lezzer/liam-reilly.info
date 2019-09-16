import React, { Component } from 'react';

import css from './resume-statement.css';

export default class ResumeStatement extends Component{

    render() {
        return (
            <div className={css.statement}>
                <h2>personal statement</h2>

                <p>Seasoned software engineering professional with an entrepreneurial spirit.</p>

                <p>Spent 20+ years building software across many industries and business sizes, gaining experience with everything from platform and language changes to complete software development paradigm shifts.</p>

                <p>Analytical, recognising new opportunities, spotting problems and recommending/building software solutions to help streamline business processes to meet business requirements.</p>

                <p>This has led to forming Alchemist Labs, building new software products and sharing experience to help other companies improve their competitive edge in this new cloud first, mobile first world. </p>
            </div>
        );
    }

}