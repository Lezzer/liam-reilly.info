import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import css from './footer-menu-bar.css';

export default class FooterMenuBar extends Component
{
    render() {
        return (                    
            <div className={css.nav}>
                <h1>Navigation</h1>
                <ul>
                    <li><Link to={'/'}>home</Link></li>
                    <li><Link to={'/resume/'}>resume</Link></li>
                    <li><Link to={'/blog/'}>blog</Link></li>
                    <li><Link to={'/contact/'}>contact</Link></li>
                    <li><Link to={'https://github.com/liam-reilly/'} target={'_blank'}>github</Link></li>
                </ul>
            </div>
        );
    }
}