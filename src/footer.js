import React, { Component } from 'react';
import css from './styles/footer.css';

export default class Footer extends Component
{
    render() {
        return (
            <div>
                <div className={css.footer}>
                    <div className={css.about}>
                        <h1>About <a>Liam</a></h1>
                        <p>Liam has been coding since childhood. Taught by his father, he instantly fell in love with being able to instruct the computer, to perform tasks he didn't want to do himself.</p>
                        <p>He learned early that when it comes to software development at least, lazyness can be a positive, rather than a negative.</p>
                        <p>It was this profound idea, this reluctance to repeat tasks that could be automated that pushed him into a life of professional development.</p>
                        <p>And rather ironically, a life of never ending learning and hard work!</p>
                    </div>
                    <div className={css.nav}>
                        <h1>Navigation</h1>
                        <ul>
                            <li><a href="#">home</a></li>
                            <li><a href="#">resume</a></li>
                            <li><a href="#">blog</a></li>
                            <li><a href="#">contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className={css.copy}>
                    © Liam Reilly 2018
                </div>
            </div>
        );
    }
}