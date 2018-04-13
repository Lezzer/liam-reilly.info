import React, { Component } from 'react';
import css from './styles/content.css';

export default class Content extends Component
{
    render() {
        return (
            <div className={css.content}>
                This this the page content
            </div>
        );
    }
}