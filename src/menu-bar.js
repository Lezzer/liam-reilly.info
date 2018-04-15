import React, { Component } from 'react';
import css from './styles/menu-bar.css';

export default class MenuBar extends Component
{
    render() {
        return (
            <div className={css["menu-bar"]}>
                <ul>
                    <li><a href="#">home</a></li>
                    <li><a href="/resume">resume</a></li>
                    <li><a href="/blog">blog</a></li>
                    <li><a href="/contact">contact</a></li>
                </ul>
            </div>
        );
    }
}