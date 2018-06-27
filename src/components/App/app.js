import React, { Component } from 'react';
import Header from "../Header/header";
import Content from "../MainContent/content";
import Footer from "../Footer/footer";
import './app.css'
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