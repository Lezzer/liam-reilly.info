import React, { Component } from 'react';

import css from './styles/resume-technical-skills.css';

export default class ResumeTechnicalSkills extends Component{

    render() {
        return (
            <div className={css.technical_skills}>
                <h2>technical skills</h2>

                <ul>
                    <li>Languages: <span>C#, VB, Python, PHP</span></li>
                    <li>Web: <span>React, Redux, Webpack, Angular, ES6, Typescript, KnockoutJS, ASP.NET MVC &amp WebAPI</span></li>
                    <li>Databases: <span>DynamoDB, MS SQL, PostgreSQL & MySQL</span></li>
                    <li>Operating Systems: <span>Linux, Windows &amp  Mac OS</span></li>
                    <li>Platforms: <span>Docker</span></li>
                    <li>Version control: <span>Git/Mercurial, </span></li>
                    <li>Microsoft Technologies: <span>WCF, WPF &amp Win/Web Forms</span></li>
                    <li>Messaging: <span>RabbitMQ, Azure Service Bus, Celery &amp MassTransit</span></li>
                    <li>DevOps: <span>Puppet, Ansible, Docker, Vagrant &amp Octopus Deploy</span>
                    </li>
                </ul>
            </div>
        );
    }

}