import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import css from './blog.css';

export default class Blog extends Component
{
    render() {
        const { match: { params } } = this.props;
        
        const content = require('../../../public/blog/posts/' + params.post);
        
        return (
            <div className={css.blog}>
                <ReactMarkdown source={content}/>
            </div>
        );
    }
}