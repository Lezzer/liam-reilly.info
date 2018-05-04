import React, { Component } from 'react';

import css from './styles/resume-experience.css';

export default class ResumeExperience extends Component{

    render() {
        return (
            <div className={css.experience}>
                <h2>experience</h2>

                <div className="job_section">
                    <span id="job_company">Zuto</span>
                    <span id="job_location">Manchester</span>
                    <span id="job_time">2016 - Present</span>
                    <div id="job_title">Senior Software Engineer</div>
                </div>

                <div className="job_section">
                    <span id="job_company">SoNQ</span>
                    <span id="job_location">Manchester</span>
                    <span id="job_time">2015 - 2016</span>
                    <div id="job_title">Senior Software Developer (Team Leader)</div>
                </div>

                <div className="job_section">
                    <span id="job_company">MediaCom North</span>
                    <span id="job_location">Manchester</span>
                    <span id="job_time">2012 - 2015</span>
                    <div id="job_title">Senior Systems Developer</div>
                </div>

                <div className="job_section">
                    <span id="job_company">3-Si Limited</span>
                    <span id="job_location">Newcastle-Under-Lyme</span>
                    <span id="job_time">2010 - 2012</span>
                    <div id="job_title">Software Developer</div>
                </div>

                <div className="job_section">
                    <span id="job_company">Shire Dental / Consulsoft (Midshire)</span>
                    <span id="job_location">Middlewich</span>
                    <span id="job_time">2006 - 2010</span>
                    <div id="job_title">Software Developer</div>
                </div>

                <div className="job_section">
                    <span id="job_company">Huntleigh Renray</span>
                    <span id="job_location">Winsford</span>
                    <span id="job_time">2004 - 2006</span>
                    <div id="job_title">Software Developer</div>
                </div>

                <div className="job_section">
                    <span id="job_company">Tissue Science Laboratories</span>
                    <span id="job_location">Winsford</span>
                    <span id="job_time">2001 - 2004</span>
                    <div id="job_title">Software Developer</div>
                </div>

            </div>
        );
    }

}