import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarker } from '@fortawesome/fontawesome-free-solid';

import css from './styles/resume.css';

export default class Resume extends Component
{
    render() {
        return (
            <div className={css.page}>
                <div className={css["contact-info"]}>
                    <h1>liam reilly</h1>

                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>offers@liam-reilly.info</span>

                    <FontAwesomeIcon icon={faPhone} />
                    <span>07802 385 455</span>

                    <FontAwesomeIcon icon={faMapMarker} />
                    <span>stretford</span>
                </div>
            </div>
        );
    }
}