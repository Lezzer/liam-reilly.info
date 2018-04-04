import React, { Component } from 'react';
import Header from "./header";
import AppCss from "./styles/app.css";
import HeaderCss from "./styles/header.css";

export default class App extends Component {
    render() {
        return (
            <div className={AppCss["flex-container"]}>
                <div className={HeaderCss.header}>
                    <Header />
                </div>
            </div>
        );
    }
}