import React, { Component } from 'react';

import css from './styles/resume-technical-skills.css';

export default class ResumeTechnicalSkills extends Component{

    render() {
        return (
            <div className={css.technical_skills}>
                <h2>technical skills</h2>

                <ul>
                    <li>Languages: <span>C#, VB, Python, PHP</span></li>
                    <li>Web: <span>HTML, CSS, JavaScript (including JQuery, Angular, Typescript &amp KnockoutJS), ASP.NET MVC &amp WebAPI</span></li>
                    <li>Databases: <span>MS SQL, PostgreSQL & MySQL</span></li>
                    <li>Environments: <span>Linux &amp Windows</span></li>
                    <li>Version control: <span>Git &amp Mercurial</span></li>
                    <li>Microsoft Technologies: <span>WCF, WPF &amp Win/Web Forms</span></li>
                    <li>Messaging: <span>RabbitMQ, Azure Service Bus, Celery &amp MassTransit</span></li>
                    <li>DevOps: <span>Puppet, Ansible, Docker, Vagrant &amp Octopus Deploy</span>
                    </li>
                </ul>
            </div>
        );
    }

}