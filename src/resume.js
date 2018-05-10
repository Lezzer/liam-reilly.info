import React, { Component } from 'react';
import css from './styles/resume.css';

import ResumeHeader from "./resume-header";
import ResumeStatement from "./resume-statement";
import ResumeTechnicalSkills from "./resume-technical-skills";
import ResumeBusinessSkills from "./resume-business-skills";
import ResumeProjects from "./resume-projects";
import ResumeExperience from "./resume-experience";

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