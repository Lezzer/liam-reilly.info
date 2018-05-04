import React, { Component } from 'react';

import css from './styles/resume-statement.css';

export default class ResumeStatement extends Component{

    render() {
        return (
            <div className={css.statement}>
                <h2>statement</h2>

                <p>I'm a very passionate developer and I pride myself on writing quality, clean code. I've been described as being on the religious side when it comes to architecting maintainable code that adheres to SOLID design principles.</p>

                <p>I care deeply about doing things the right way, and always strive to deliver the perfect solution. I do not believe in sacrificing code quality just to get the job done. But I also believe that when you approach software development properly, utilising common design patterns you really don't have to.</p>

                <p>Over the last couple of years I've enjoyed writing distributed systems and I have a particular interest in message brokers such as RabbitMQ. I've recently implemented the "Routing Slip" pattern to break apart a legacy monolithic code base and replaced it with focussed, distributed sagas accessible via Web API.</p>

                <p>In my current role I have really enjoyed using my many years of experience to introduce other developers to SOLID principles and TDD. I was promoted to team leader and asked to mentor junior developers before I had completed my initial probation period. I've enjoyed code reviews and helping junior and senior developers alike, to think in new ways when it comes to writing code.</p>

                <p>Looking forward to the future I'm keen to do more work in the distributed systems space, and I have an interest in container platforms such as Docker/Kubernetes. I am looking for a new role that will allow me to continue to learn and grow personally, and continue to help other developers progress.</p>
            </div>
        );
    }

}