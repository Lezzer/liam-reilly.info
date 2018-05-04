import React, { Component } from 'react';

import css from './styles/resume-projects.css';

export default class ResumeProjects extends Component{

    render() {
        return (
            <div className={css.projects}>
                <h2>projects</h2>

                <ul>
                    <li>CQRS: <span> Rearchitected and replaced a bespoke, in-house CQRS implementation.  Correctly separating commands from their handlers/validation.  Resulting in a much cleaner, maintainable true CQRS implementation.  Where validation decorators were used to wrap command handlers.  This was easily configurable using dependency injection.</span></li>
                    <li>Routing Slip Saga: <span>Replaced legacy code, which had commands calling commands, with a fully distributed "Routing Slip" Saga using Mass Transit.  Built in support for both RabbitMQ and Azure Service Bus message brokers.  The message broker was interchangeable using dependency injection.   </span></li>
                    <li>OpenID Connect / OAuth2 Authentication / Authorisation / Single Sign-On: <span>Implemented a centralised OpenID Connect/OAuth2 authentication/authorisation system using IdentityServer.  This replaced the existing bespoke login system used in all web applications. Enabling single sign-on for users using Azure AD/Google/Facebook/Twitter etc. </span></li>
                    <li>Blade: <span>Developed the latest version of an internal legacy web application (VB ASP.NET), as a modern web application.  The new application was comprised of an AngularJS front-end, C# business layer, with a Typescript service layer all hosted on NancyFX.</span></li>
                    <li>Distributed Scheduler: <span> Lead developer from inception to delivery of a system, capable of running applications across multiple servers. . Further developed to support running any type of job written in C#.  Web API distributes workload to multiple workers which in turn handle the running of jobs. Workers are configurable to use multi- threading where necessary. The system provides up to date performance data so that the business can perform valuable data analysis. </span></li>
                    <li>Data Collection: <span> Redesigned a legacy data collection system written in Python with an up to date C# equivalent. This drastically improved the speed and reliability when gathering conversion and performance data from 3rd party APIs, and inserting it into client databases. The performance and conversion data is matched across sources to allow for easier querying and path to conversion analysis. These data are fed into a dashboard to ensure accuracy before presentation to clients.</span></li>
                    <li>Automated Trafficking: <span> Designed and wrote a tool to automate the process of trafficking display campaigns into Atlas and DCM ad serving platforms. Originally created in Python and further developed to run as an application under a Scheduling Tool. The tool greatly reduces the time needed to launch business critical advertising campaigns.</span></li>
                    <li>Display Campaign Manager: <span>Participated in the design and implementation of a web application using ASP.NET MVC and Entity Framework, and designed a rich, user focused interface, heavily reliant upon KnockoutJS. The application increased the speed of advertising campaign planning and increased efficiency through creation of sheets necessary for a automated trafficking tool.</span></li>
                </ul>
            </div>
        );
    }

}