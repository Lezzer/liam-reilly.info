import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/fontawesome-free-solid';

import css from './styles/resume-projects.css';

export default class ResumeProjects extends Component{

    render() {
        return (
            <div className={css.projects}>
                <h2>projects</h2>
                
                <h3><FontAwesomeIcon icon={faAt} spin={false} className={css.font_awesome_icon}/>Zuto</h3>
                <ul id={'zuto'}>
                    <li>AWS Migration:<span>Migrated ~30 mission critical legacy services running on a single server. To be independent services, hosted on various parts of Amazon Web Services. This included risky refactoring/rewriting parts of the services, replacing unsupported technologies such as MSMQ with SNS/SQS.  The services now utilise many different parts of the AWS offerings, such as Lambda, Elastic Beanstalk, Code Deploy, DynamoDB, Route53, CloudWatch, S3, EC2 to name a few.  All services/infrastructure is expressed as Terraform meaning, repeatable deployments with opportunity for human error greatly reduced.</span></li>
                    <li>Communication Service:<span>Led the design of a communication service, that enabled the business to have 2 way SMS communication between customers and sales partners for the first time.  I used the opportunity to explore AWS Lambda, which was a huge success for the business. Lambda greatly reduced the complexity of the solution.  It was faster to build, easier to maintain and financially very efficient.  Senior I.T. management have said it’s the most scalable, resilient service we have, and is almost completely free to operate.</span></li>
                    <li>Secure Document Upload:<span>I built an entirely new document upload component for our website, that enabled customers to safely upload sensitive documents such as passports, photo id's, finance agreements and other documents in line with new GDPR requirements.   I opted to build this using React/Redux which others on our team were not experienced with, but was used elsewhere on the website by other teams.  First I built a proof of concept and presented to the team. I then paired with other team members, teaching them React/Redux.  Before long, the team was working independently and extending the component until it supported all the various document types. </span></li>
                </ul>
                
                <h3><FontAwesomeIcon icon={faAt} spin={false} className={css.font_awesome_icon}/>SoNQ</h3>
                <ul id={'sonq'}>
                    <li>CQRS:<span>Rearchitected and replaced the in-house CQRS implementation which I inherited, correctly separating concerns.  The original implementation had commands, command handlers & validation all combined into a single class. Separating these, resulted in a much cleaner, maintainable and true CQRS implementation. Where validation decorators were used to wrap command handlers. This was easily configurable using dependency injection.</span></li>
                    <li>Routing Slip Saga:<span>Replaced confusing legacy code, which had become a myriad of commands calling commands, with a fully distributed Saga utilising the Routing Slip Pattern.  My implementation supported both RabbitMQ and Azure Service Bus message brokers, and was easily interchangeable using dependency injection.</span></li>
                    <li>OpenID Connect / OAuth2 Authentication / Authorisation / Single Sign-On: <span>Implemented a centralised OpenID Connect/OAuth2 authentication/authorisation system using IdentityServer.  This replaced the existing bespoke login system used in all web applications. Enabling single sign-on for users using Azure AD/Google/Facebook/Twitter etc. </span></li>
                </ul>

                
                <h3><FontAwesomeIcon icon={faAt} spin={false} className={css.font_awesome_icon}/>MediaCom</h3>
                <ul id={'mediacom'}>
                    <li>Distributed Scheduler:<span> Lead development from inception to delivery of a system, capable of running tasks/applications across multiple servers.  Workers were configurable to use parallelisation where necessary. The system provided up to date performance data so that the business could perform valuable data analysis.</span></li>
                    <li>Data Collection:<span> Redesigned a legacy data collection system written in Python with an up to date C# equivalent. This drastically improved the speed and reliability when gathering conversion and performance data from 3rd party APIs, and inserting it into client databases. The performance and conversion data was then matched across sources to allow for easier querying and path to conversion analysis. The data was fed into a dashboard to ensure accuracy before presentation to clients.</span></li>
                    <li>Automated Trafficking:<span> Designed and wrote a tool to automate the process of trafficking display campaigns into Atlas and DCM ad serving platforms. The tool greatly reduced the time needed to launch business critical advertising campaigns.</span></li>
                </ul>
            </div>
        );
    }

}