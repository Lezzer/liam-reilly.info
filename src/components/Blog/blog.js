import React, { Component } from 'react';
import ReactGA from 'react-ga';

export default class Blog extends Component {
    componentDidMount() {
        ReactGA.pageview('/blog/');
    }
    
    render() {
        return (
            <div>
                <p>Blogs are coming soon!</p>
            </div>
        );
    }
}