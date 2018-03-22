import React, { Component } from 'react';
import css from './styles/header.css';

export default class Header extends Component
{
    render() {
        return (
            <div className={css.header}>
                <h1> liam-reilly.info </h1>  
            </div>
        );
    }
}