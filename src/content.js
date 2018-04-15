import React, { Component } from 'react';
import css from './styles/content.css';
import { Route } from 'react-router-dom';
import Home from "./home";
import Resume from "./resume";
import Contact from "./contact";
import Blog from "./blog";

export default class Content extends Component
{
    render() {
        return (
            <div className={css.content}>
                <Route exact={true} path={'/'} component={Home} />
                <Route path={'/resume'} component={Resume} />
                <Route path={'/blog'} component={Blog} />
                <Route path={'/contact'} component={Contact} />
            </div>
        );
    }
}