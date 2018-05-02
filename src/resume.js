import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarker } from '@fortawesome/fontawesome-free-solid';

import css from './styles/resume.css';

export default class Resume extends Component
{
    render() {
        return (
            <div className={css.page}>
                
                <div className={css.contact_info}>
                    <h1>liam reilly</h1>

                    <FontAwesomeIcon icon={faEnvelope} spin={false} />
                    <span>offers@liam-reilly.info</span>

                    <FontAwesomeIcon icon={faPhone} />
                    <span>07802 385 455</span>

                    <FontAwesomeIcon icon={faMapMarker} />
                    <span>stretford</span>
                </div>
                
                <div className={css.statement}>
                    <h2>statement</h2>
                    
                    <p>I'm a very passionate developer and I pride myself on writing quality, clean code. I've been described as being on the religious side when it comes to architecting maintainable code that adheres to SOLID design principles.</p>
                
                    <p>I care deeply about doing things the right way, and always strive to deliver the perfect solution. I do not believe in sacrificing code quality just to get the job done. But I also believe that when you approach software development properly, utilising common design patterns you really don't have to.</p>
                
                    <p>Over the last couple of years I've enjoyed writing distributed systems and I have a particular interest in message brokers such as RabbitMQ. I've recently implemented the "Routing Slip" pattern to break apart a legacy monolithic code base and replaced it with focussed, distributed sagas accessible via Web API.</p>
                    
                    <p>In my current role I have really enjoyed using my many years of experience to introduce other developers to SOLID principles and TDD. I was promoted to team leader and asked to mentor junior developers before I had completed my initial probation period. I've enjoyed code reviews and helping junior and senior developers alike, to think in new ways when it comes to writing code.</p>
                    
                    <p>Looking forward to the future I'm keen to do more work in the distributed systems space, and I have an interest in container platforms such as Docker/Kubernetes. I am looking for a new role that will allow me to continue to learn and grow personally, and continue to help other developers progress.</p>
                </div>
                
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
                
                <div className={css.business_skills}>
                    <h2>business skills</h2>
                    
                    <ul>
                        <li>Software Development: <span>Creative and technical expertise in software development, leading projects from conception to completion through the full development life cycle, with adherence to SOLID development principles. Experience of delivering peer reviews and code reviews. </span></li>
                        <li>Project Planning: <span>Thorough working knowledge of software development life cycle methodologies. Instrumental in implementing both Scrum and XP practices to our in-house development style, enabling delivery of high quality work to tight deadlines.</span></li>
                        <li>Team Working: <span>Positively work with others and easily build and maintain relationships to ensure the success of the team. Experience of managing expectations and deliverables across teams in various departments.</span></li>
                        <li>Customer Focus: <span>Ability to work positively with internal and external clients and partners.  Interacting with the business, clients, suppliers and developers to ensure the needs of all parties are met.</span></li>
                        <li>People management: <span>A supportive, mentor to junior team members, developing skills and training.</span></li>
                    </ul>
                </div>
                
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
                
            </div>
        );
    }
}