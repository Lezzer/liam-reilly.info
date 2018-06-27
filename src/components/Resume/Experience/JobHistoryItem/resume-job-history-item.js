import React, { Component } from 'react';

import css from './resume-job-history-item.css';

export default class ResumeJobHistoryItem extends Component{

    render() {
        return (
            <div className={css.job_history_item}>
                <ul>
                    <li>{this.props.company}</li>
                    <li >{this.props.location}</li>
                    <li >{this.props.start} - {this.props.end}</li>
                </ul>
                <span>{this.props.position}</span>
            </div>
        );
    }

}