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
import logo from "../Images/logo.png";

import "../css/sbar.css";
import MenuItem from "antd/lib/menu/MenuItem";
const { Meta } = Card;
const { Header, Content, Footer } = Layout;

const SubMenu = Menu.SubMenu;

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
        {/* <SubMenu title="disabled sub menu" disabled>
      <Menu.Item>5d menu item</Menu.Item>
      <Menu.Item>6th menu item</Menu.Item>
    </SubMenu> */}
    </Menu>
);

class Head extends Component {
    state = {};
    render() {
        return (
            <div>
                {" "}
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
                        <Menu.Item key="2">Login</Menu.Item>
                        <Menu.Item key="3">Sign up</Menu.Item>
                    </Menu>
                </div>
                <Row>
                    {" "}
                    <Col offset={4}>
                        {" "}
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
                            />{" "}
                            <AutoComplete
                                className="global-search"
                                size="large"
                                style={{
                                    width: "50%",
                                    marginLeft: "1%",
                                    color: "#B7B8B7"
                                }}
                                //   dataSource={dataSource.map(renderOption)}
                                //   onSelect={onSelect}
                                //   onSearch={this.handleSearch}
                                optionLabelProp="text"
                            >
                                <Input
                                    style={{ backgroundColor: "#F5F5F5" }}
                                    placeholder="Search"
                                    suffix={
                                        <Button
                                            className="search-btn"
                                            size="large"
                                            icon="search"
                                            style={{
                                                backgroundColor: "#F57224",
                                                color: "white"
                                            }}
                                        >
                                            {/* <Icon type="search" /> */}
                                            Search
                                        </Button>
                                    }
                                />
                            </AutoComplete>
                            <Icon
                                type="shopping-cart"
                                style={{ fontSize: "50px", marginLeft: "3%" }}
                            />
                        </div>
                        {/* <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2018 Created by Ant UED
    </Footer> */}
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
        );
    }
}

export default Head;
