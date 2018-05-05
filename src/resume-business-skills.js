import React, { Component } from 'react';

import css from './styles/resume-business-skills.css';

export default class ResumeBusinessSkills extends Component{

    render() {
        return (
            <div className={css.business_skills}>
                <h2>business skills</h2>

                <ul>
                    <li>Software Development: <span>Creative and technical expertise in software development, leading projects from conception to completion through the full development life cycle, with adherence to SOLID development principles.</span></li>
                    <li>Project Planning: <span>Thorough working knowledge of software development life cycle methodologies. Extensive experience running Kanban and Agile Scrum sprints. Delivering all sprint ceremonies.  </span></li>
                    <li>Team Working: <span>Positively work with others and easily build and maintain relationships to ensure the success of the team. Experience of managing expectations and deliverables across teams in various departments.</span></li>
                    <li>Customer Focus: <span>Ability to work positively with internal and external clients and partners. Interacting with the business, clients, suppliers and developers to ensure the needs of all parties are met.</span></li>
                    <li>People management: <span>A supportive, mentor to junior team members, developing skills, training and providing code reviews. </span></li>
                </ul>
            </div>
        );
    }

}