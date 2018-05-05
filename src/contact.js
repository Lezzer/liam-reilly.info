import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Contact extends Component
{
    render() {
        return (
            <div>
                <p>The contact page is coming soon!</p>
                
                <p>You can find contact details on the <Link to={'/resume/'}>resume</Link> page if you wish to talk with me.</p>
            </div>
        );
    }
}