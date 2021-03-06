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
    }
    state = {
        redirect: false,
        r: false,
        logged: "",
        value: ""
    };

    componentDidMount() {
        axios.get("/api/user").then(res => {
            const user = res.data;
            console.log("user is ", user);
            this.setState({ logged: user });
        });
    }
    handleSearch = e => {
        console.log("search value is", e.target.value);
        this.setState({ value: e.target.value });
    };

    doLogout = e => {
        e.preventDefault();
        axios.post("/logout").then(res => {
            window.location.reload();
        });
    };

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Row>
                        <Col>
                            <div style={{ backgroundColor: "#F5F5F5" }}>
                                <Menu
                                    theme="light"
                                    mode="horizontal"
                                    style={{
                                        lineHeight: "30px",
                                        // marginLeft: "70%",
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
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "2%" }}>
                        <Col span={6}>
                            <div
                                style={{
                                    position: "relative",
                                    marginLeft: "20%"
                                }}
                            >
                                <a href="/">
                                    <img
                                        src={logo}
                                        alt="Shopx"
                                        width="100"
                                        height="80"
                                    />
                                </a>
                            </div>
                        </Col>
                        <Col span={12}>
                            <Input
                                onChange={this.handleSearch}
                                size="large"
                                style={{ width: "100%" }}
                                addonAfter={
                                    <a
                                        href={"/search/" + this.state.value}
                                        style={{ color: "white" }}
                                    >
                                        {" "}
                                        <Button
                                            type="primary"
                                            // size="large"
                                            icon="search"
                                            rounded
                                        >
                                            Search
                                        </Button>
                                    </a>
                                }
                            />
                        </Col>
                        <Col span={6}>
                            <a href="/mylist">
                                <Icon
                                    type="shopping-cart"
                                    style={{
                                        fontSize: "400%",
                                        marginLeft: "10%"
                                    }}
                                />
                            </a>
                        </Col>
                    </Row>{" "}
                    <div style={{ padding: "2%", textAlign: "center" }}>
                        <Dropdown overlay={menu}>
                            <a href="/categories">
                                <Button icon="appstore" rounded>
                                    Categories
                                </Button>
                            </a>
                        </Dropdown>

                        <Button icon="shop" rounded>
                            Stores
                        </Button>

                        <Button icon="database" rounded>
                            Products
                        </Button>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default Head;
