import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneVolume, faLocationArrow } from '@fortawesome/fontawesome-free-solid';

import css from './styles/resume-header.css';

export default class ResumeHeader extends Component{
    
    render() {
        return (
            <div className={css.contact_info}>
                <div>
                    <span>
                        <FontAwesomeIcon icon={faEnvelope} spin={false} />
                        hire@liam-reilly.info
                    </span>

                    <span>
                        <FontAwesomeIcon icon={faPhoneVolume} />
                        07802 385 455
                    </span>

                    <span className={css.location}>
                        <FontAwesomeIcon icon={faLocationArrow} />
                        stretford
                    </span>
                </div>
            </div>
        );
    }

}