import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/fontawesome-free-solid';
import css from './not-found.css';

export default class NotFound extends Component
{
    render() {
        return (
            <div className={css.not_found}>
                <FontAwesomeIcon icon={faFrown} spin={true} />
                <p className={css.error}>Error:  404 - Page Not Found</p>
                <p className={css.msg}>The page you requested doesn't seem to exist.</p>
                <p className={css.msg}>Please double check the address and try again.</p>
            </div>
        );
    }
}