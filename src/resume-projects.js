import React, { Component } from 'react';

import css from './styles/resume-projects.css';

export default class ResumeProjects extends Component{

    render() {
        return (
            <div className={css.projects}>
                <h2>projects</h2>

                <ul>
                    <li>AWS Migration:<span>Migrated ~30 mission critical legacy services which ran on a real server. To be independent services, hosted on various parts of Amazon Web Services. This included refactoring and rewriting parts of the services, to strip out unsupported technologies such as MSMQ to be replaced with SNS/SQS.   The services now utilise many different parts of the AWS offerings, such as Lambda, Elastic Beanstalk, Code Deploy, DynamoDB, Route53, CloudWatch, S3, EC2 etc.  All services/infrastructure is expressed as Terraform meaning, repeatable deployments with opportunity for human error largely removed.</span></li>
                    <li>Communication Service:<span>Led the design of a communication service, that enabled the business to have 2 way SMS communication between customers and sales partners for the first time.  Used the opportunity to explore AWS Lambda, which was a huge success for the business.  The solution was simpler to build, it’s easier to maintain. Faster to deploy, and cheaper to run.  Senior I.T. management have said it’s the most scalable, resilient service we have, and is almost completely free to operate.</span></li>
                    <li>CQRS:<span>Rearchitected and replaced a bespoke, in-house CQRS implementation. Correctly separating concerns.  The implementation that I inherited had commands and their handlers & validation all combined as a single class. Separating these, resulted in a much cleaner, maintainable and true CQRS implementation. Where validation decorators were used to wrap command handlers. This was easily configurable using dependency injection.</span></li>
                    <li>Routing Slip Saga:<span>Replaced confusing legacy code, which had become a myriad of commands calling commands, with a fully distributed Saga utilising the Routing Slip Pattern.  My implementation supported both RabbitMQ and Azure Service Bus message brokers, and was easily interchangeable using dependency injection.</span></li>
                    <li>OpenID Connect / OAuth2 Authentication / Authorisation / Single Sign-On: <span>Implemented a centralised OpenID Connect/OAuth2 authentication/authorisation system using IdentityServer.  This replaced the existing bespoke login system used in all web applications. Enabling single sign-on for users using Azure AD/Google/Facebook/Twitter etc. </span></li>
                    <li>Distributed Scheduler:<span> Lead developer from inception to delivery of a system, capable of running applications across multiple servers. . Further developed to support running any type of job written in C#.  Web API distributes workload to multiple workers which in turn handle the running of jobs. Workers are configurable to use multi- threading where necessary. The system provides up to date performance data so that the business can perform valuable data analysis. </span></li>
                    <li>Data Collection:<span> Redesigned a legacy data collection system written in Python with an up to date C# equivalent. This drastically improved the speed and reliability when gathering conversion and performance data from 3rd party APIs, and inserting it into client databases. The performance and conversion data is matched across sources to allow for easier querying and path to conversion analysis. The data is fed into a dashboard to ensure accuracy before presentation to clients.</span></li>
                    <li>Automated Trafficking:<span> Designed and wrote a tool to automate the process of trafficking display campaigns into Atlas and DCM ad serving platforms. Originally created in Python and further developed to run as an application under a Scheduling Tool. The tool greatly reduces the time needed to launch business critical advertising campaigns.</span></li>
                    <li>Display Campaign Manager:<span>Participated in the design and implementation of a web application using ASP.NET MVC and Entity Framework, and designed a rich, user focused interface, built mostly in KnockoutJS. The application increased the speed of advertising campaign planning and increased efficiency through creation of sheets necessary for a automated trafficking tool.</span></li>
                </ul>
            </div>
        );
    }

}