import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './post-notification.css';

export default class PostNotification extends Component
{
    render() {
        return (
            <div className={css.post}>
                <div className={css.header}>
                    <div className={css.calendar}>
                        <span>{this.props.day}</span>
                        <span>{this.props.month}</span>
                    </div>
                    <h4>{this.props.title}</h4>
                </div>
                <hr/>
                    {
                        this.props.content.map((x, i) => <p key={i}>{x}</p>)
                    }
                <span className={css.post_link}>
                    <a href={this.props.link}>Read More</a>
                </span>
            </div>
        );
    }
}

PostNotification.propTypes = {
    month: PropTypes.string.isRequired,  
    day: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.array.isRequired,
    link: PropTypes.string.isRequired
};