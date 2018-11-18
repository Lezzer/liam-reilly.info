import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import css from './post.css';

export default class Post extends Component
{
    render() {
        const { match: { params } } = this.props;

        const content = require('../../../../public/blog/posts/' + params.post);

        return (
            <div className={css.post}>
                <ReactMarkdown source={content}/>
            </div>
        );
    }
}