import React, { Component } from 'react';
import css from './styles/footer.css';

export default class Footer extends Component
{
    render() {
        return (
            <div className={css.footer}>
                <div className={css.main}>
                    Stuff will go here...
                </div>
                <div className={css.copy}>
                    © Liam Reilly 2018
                </div>
            </div>
        );
    }
}