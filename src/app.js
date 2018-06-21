import React, { Component } from 'react';
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import './styles/app.css'
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

export default class App extends Component {
    render() {
        return (
            <Router>
                <ScrollToTop>                    
                    <Header/>
                    <Content/>
                    <Footer/>
                </ScrollToTop>
            </Router>
        );
    }
}