import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
                <hr/>
                <div className={css.content}>
                    {
                        this.props.content.map((x, i) => <p key={i}>{x}</p>)
                    }
                </div>
                <hr/>
                <span className={css.post_link}>You will be able to find blog posts <Link to={'/blog/'}>here</Link></span>
            </div>
        );
    }
}

NewBlogPost.propTypes = {
    month: PropTypes.string.isRequired,  
    day: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};