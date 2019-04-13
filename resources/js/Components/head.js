import React, { Component } from "react";
import {
    Col,
    Card,
    Row,
    Carousel,
    Button,
    Layout,
    Menu,
    AutoComplete,
    Input,
    Icon,
    Cascader,
    Popover,
    Dropdown
} from "antd";
import { BrowserRouter, Route, Redirect, NavLink } from "react-router-dom";
import SearchResults from "./Search";
import logo from "../Images/logo.png";
import axios from "axios";

import "../css/sbar.css";
import MenuItem from "antd/lib/menu/MenuItem";
const Search = Input.Search;

const menu = (
    <Menu>
        <MenuItem>Women's Fashion</MenuItem>
        <MenuItem>Men's Fashion</MenuItem>
        <MenuItem>Electronics and Devices</MenuItem>
        <MenuItem>Electronic Accessories</MenuItem>
        <MenuItem>TV and Home Applicances</MenuItem>
        <MenuItem>Health and Beauty</MenuItem>
        <MenuItem>Babies and Toys</MenuItem>
        <MenuItem>Grocery and Pets</MenuItem>
        <MenuItem>Home and Lifestyle</MenuItem>
        <MenuItem>Watches and Accessories</MenuItem>
        <MenuItem>Automotive and Motorbike</MenuItem>
        <MenuItem>Sports</MenuItem>
    </Menu>
);

class Head extends Component {
    constructor(props) {
        super(props);
        this.setRedirect = this.setRedirect.bind(this);
    }
    state = {
        redirect: false,
        r: false,
        logged: ""
    };

    componentDidMount() {
        axios.get("/api/user").then(res => {
            const user = res.data;
            console.log("user is ", user);
            this.setState({ logged: user });
        });
    }
    handleSearch(value) {
        console.log("search value is", value);
        // this.setState({ value: value }, () => {
        //     console.log("about to redirect");
        //     // <Redirect to="/search" />
        // });
        this.setRedirect();
        this.props.goSearch();
    }

    setRedirect = () => {
        console.log("setting redirect");
        this.setState({
            redirect: true
        });
    };
    renderRedirect = () => {
        if (this.state.redirect) {
            console.log("redirecting");
            // window.location.reload();
            // this.setState({r:true});
            return <Redirect to="/search" />;
        }
    };
    render() {
        return (
            <BrowserRouter>
                <div>
                    {this.renderRedirect()}
                    {/* <Route
                        path="/search"
                        render={props => <SearchResults {...props} />}
                        value={this.state.value}
                    /> */}
                    <div style={{ backgroundColor: "#F5F5F5" }}>
                        <Menu
                            theme="light"
                            mode="horizontal"
                            style={{
                                lineHeight: "30px",
                                marginLeft: "70%",
                                backgroundColor: "#F5F5F5"
                            }}
                        >
                            <Menu.Item key="1">Store owner?</Menu.Item>
                            {this.state.logged.id && (
                                <Menu.Item key="2">Logout</Menu.Item>
                            )}
                            {!this.state.logged.id && (
                                <Menu.Item key="2">Login</Menu.Item>
                            )}
                            {this.state.logged.id && (
                                <Menu.Item key="3">Profile</Menu.Item>
                            )}
                            {!this.state.logged.id && (
                                <Menu.Item key="3">Signup</Menu.Item>
                            )}
                           
                        </Menu>
                    </div>
                    <Row>
                        <Col offset={4}>
                            <div
                                className="global-search-wrapper"
                                style={{
                                    paddingRight: "50px",
                                    padding: "1%",
                                    position: "relative"
                                }}
                            >
                                <img
                                    src={logo}
                                    alt="Shopx"
                                    width="8%"
                                    height="8%"
                                />

                                <Search
                                    placeholder="input search text"
                                    enterButton="Search"
                                    size="large"
                                    onSearch={value => this.handleSearch(value)}
                                    style={{
                                        width: "50%",
                                        marginLeft: "1%"
                                    }}
                                />
                                <Icon
                                    type="shopping-cart"
                                    style={{
                                        fontSize: "50px",
                                        marginLeft: "3%"
                                    }}
                                />
                            </div>
                        </Col>
                    </Row>{" "}
                    <Row>
                        <Col offset={9}>
                            <div>
                                <Dropdown overlay={menu}>
                                    <Button icon="appstore" shape="round">
                                        Categories
                                    </Button>
                                </Dropdown>

                                <Button icon="shop" shape="round">
                                    Stores
                                </Button>

                                <Button icon="database" shape="round">
                                    Products
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </BrowserRouter>
        );
    }
}

export default Head;
