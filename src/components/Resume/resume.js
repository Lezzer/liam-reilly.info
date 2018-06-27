import React, { Component } from 'react';
import css from './resume.css';

import ResumeHeader from "./Header/resume-header";
import ResumeStatement from "./Statement/resume-statement";
import ResumeTechnicalSkills from "./TechSkills/resume-technical-skills";
import ResumeBusinessSkills from "./BusinessSkills/resume-business-skills";
import ResumeProjects from "./Projects/resume-projects";
import ResumeExperience from "./Experience/resume-experience";

export default class Resume extends Component
{
    render() {
        return (
            <div className={css.page}>
                <h1 id={"name"}>liam reilly</h1>
                
                <ResumeHeader/>
                
                <hr/>                
                
                <ResumeStatement/>

                <hr/>

                <ResumeTechnicalSkills/>

                <hr/>

                <ResumeBusinessSkills/>

                <hr/>

                <ResumeProjects/>

                <hr/>

                <ResumeExperience/>
                
                <hr/>
            </div>
        );
    }
}