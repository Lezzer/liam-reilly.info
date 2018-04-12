import React, { Component } from 'react';
import css from './styles/menu-bar.css';

export default class MenuBar extends Component
{
    render() {
        return (
            <div className={css["menu-bar"]}>
                <ul>
                    <li>home</li>
                    <li>resume</li>
                    <li>blog</li>
                    <li>contact</li>
                </ul>
            </div>
        );
    }
}