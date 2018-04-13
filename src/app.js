import React, { Component } from 'react';
import AppCss from "./styles/app.css";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Content/>
                <Footer/>
            </div>
        );
    }
}