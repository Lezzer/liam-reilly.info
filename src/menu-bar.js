import React, { Component } from 'react';
import css from './styles/menu-bar.css';

export default class MenuBar extends Component
{
    render() {
        return (
            <div className={css["menu-bar"]}>
                <ul>
                    <li><a className={css.active} href="#">home</a></li>
                    <li><a href="#">resume</a></li>
                    <li><a href="#">blog</a></li>
                    <li><a href="#">contact</a></li>
                </ul>
            </div>
        );
    }
}