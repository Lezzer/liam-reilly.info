import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from '../src/styles/new-blog-post.css';

export default class NewBlogPost extends Component
{
    render() {
        return (
            <div className={css.new_blog_post}>
                <div className={css.header}>
                    <div className={css.calendar}>
                        <span>{this.props.day}</span>
                        <span>{this.props.month}</span>
                    </div>
                    <h4>{this.props.title}</h4>
                </div>
                <div className={css.content}>
                    {
                        this.props.content.map((x, i) => <p id={i}>{x}</p>)
                    }
                </div>
            </div>
        );
    }
}

NewBlogPost.propTypes = {
    month: PropTypes.string.isRequired,  
    day: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};