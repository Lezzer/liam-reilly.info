import React, { Component } from 'react';
import AppCss from "./styles/app.css";
import Header from "./header";
import Content from "./Content";
import Footer from "./Footer";

export default class App extends Component {
    render() {
        return (
            <div className={AppCss["flex-container"]}>
                <Header />
                <Content/>
                <Footer/>
            </div>
        );
    }
}