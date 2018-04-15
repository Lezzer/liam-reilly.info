import React, { Component } from 'react';
import css from './styles/footer-menu-bar.css';

export default class FooterMenuBar extends Component
{
    render() {
        return (                    
            <div className={css.nav}>
                <h1>Navigation</h1>
                <ul>
                    <li><a href="#">home</a></li>
                    <li><a href="#">resume</a></li>
                    <li><a href="#">blog</a></li>
                    <li><a href="#">contact</a></li>
                </ul>
            </div>
        );
    }
}
