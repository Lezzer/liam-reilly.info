import React, { Component } from 'react';
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import './styles/app.css'
import { BrowserRouter as Router } from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Content/>
                    <Footer/>
                </div>
            </Router>
        );
    }
}