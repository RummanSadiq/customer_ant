import React, { Component } from "react";
import HomePage from "./HomePage";
import Store from "./store";
import SearchComponent from "./Search";
import Categories from "./Categories";
import Chat from "./Chat";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ProductDetails from "./ProductDetails";

class SubPage extends Component {
    state = {};
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/store/:id" component={Store} />
                    <Route exact path="/" component={HomePage} />
                    <Route
                        exact
                        path="/product/:id"
                        component={ProductDetails}
                    />
                    <Route path="/search/:value" component={SearchComponent} />
                    <Route path="/categories" component={Categories} />
                    <Route path="/messages" component={Chat} />
                    <Route
                        path="/login"
                        component={() => {
                            // window.location.href = "/login";
                            window.location.reload();
                            return null;
                        }}
                    />
                    <Route
                        path="/logout"
                        component={() => {
                            window.location.href = "/logout";
                            return null;
                        }}
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default SubPage;
