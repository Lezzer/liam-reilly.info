import React, { Component } from 'react';
import css from './styles/menu-bar.css';

export default class MenuBar extends Component
{
    render() {
        return (
            <div className={css["menu-bar"]}>
                <ul>
                    <li className={css.active}>home</li>
                    <li>resume</li>
                    <li>blog</li>
                    <li>contact</li>
                </ul>
            </div>
        );
    }
}