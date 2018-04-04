import React, { Component } from 'react';
import css from './styles/header.css';

export default class Header extends Component
{
    render() {
        return (
            <div className={css.header}>
                <img id="avatar" src='http://www.gravatar.com/avatar/7810a5172f51c37bcba95f5055b0d57e?s=175' /> 
            </div>
        );
    }
}