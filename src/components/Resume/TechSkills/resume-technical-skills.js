import React, { Component } from 'react';

import css from './resume-technical-skills.css';

export default class ResumeTechnicalSkills extends Component{

    render() {
        return (
            <div className={css.technical_skills}>
                <h2>technical skills</h2>
                
                <ul>
                    <li>Cloud Infrastructure: <span>Amazon Web Services</span></li>
                    <li>Languages: <span>C# (.NET Core 2.x)</span></li>
                    <li>Web: <span>React, Redux, GraphQL, Webpack, ES6, ASP.NET MVC, WebAPI</span></li>
                    <li>Data Stores: <span>Elasticsearch, Elasticache (Redis), DynamoDB, MSSQL/MySQL (Amazon RDS)</span></li>
                    <li>Serverless: <span>Lambda, Fargate/ECS</span></li>
                    <li>Messaging: <span>SQS, SNS</span></li>
                    <li>Testing: <span>NUnit, Jest, Enzyme, Stubby</span></li>
                    <li>DevOps: <span>Terraform, Docker</span></li>
                    <li>CI/CD: <span>CircleCI, GoCD, Jenkins</span></li>
                    <li>Version control: <span>Git</span></li>
                </ul>
                
                <p>** The list above is limited to more recently used technologies and is by no means exhaustive**</p>
            </div>
        );
    }

}