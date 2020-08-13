import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneVolume, faLocationArrow } from '@fortawesome/fontawesome-free-solid';

import css from './resume-header.css';

export default class ResumeHeader extends Component {
    
    render() {
        return (
            <div className={css.contact_info}>
                <div>
                    <span id={"email"}>
                        <FontAwesomeIcon icon={faEnvelope} spin={false} />
                        hire@liam-reilly.info
                    </span>

                    <span id={"location"} className={css.location}>
                        <FontAwesomeIcon icon={faLocationArrow} />
                        manchester
                </span>
                </div>
            </div>
        );
    }

}