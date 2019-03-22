import React, { Component } from "react";
import "./App.css";
import Head from "./Components/head";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "antd/dist/antd";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Store from "./Components/store";
import Search from "./Components/Search";
import MyList from "./Components/myList";
import Reviews from "./Components/Reviews";

class App extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "#F5F5F5" }}>
                <Head />
                <Reviews />
            </div>
        );
    }
}

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
