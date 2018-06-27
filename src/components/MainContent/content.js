import React, { Component } from 'react';
import css from './content.css';
import { Route } from 'react-router-dom';
import Home from "../Home/home";
import Resume from "../Resume/resume";
import Contact from "../Contact/contact";
import Blog from "../Blog/blog";

export default class Content extends Component
{
    render() {
        return (
            <div className={css.content}>
                <Route exact={true} path={'/'} component={Home} />
                <Route path={'/resume/'} component={Resume} />
                <Route path={'/blog/'} component={Blog} />
                <Route path={'/contact/'} component={Contact} />
            </div>
        );
    }
}