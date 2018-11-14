import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import css from './menu-bar.css';

export default class MenuBar extends Component
{
    render() {
        return (
            <div className={css.menu_bar}>
                <ul>
                    <li><Link to={'/'}>home</Link></li>
                    <li><Link to={'/resume/'}>resume</Link></li>
                    <li><Link to={'/blog/test.md'}>blog</Link></li>
                    <li><Link to={'/contact/'}>contact</Link></li>
                </ul>
            </div>
        );
    }
}