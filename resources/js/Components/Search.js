import React, { Component } from "react";
import {
    Row,
    Col,
    List,
    Rate,
    Avatar,
    Button,
    Dropdown,
    Icon,
    Menu
} from "antd";
import Head from "./head";

import Axios from "axios";
import Stores from "./LimitedStores";
import Products from "./LimitedProducts";

const menu = (
    <Menu>
        <Menu.Item key="1">
            <Icon type="pushpin" />
            Location
        </Menu.Item>
        <Menu.Item key="2">
            <Icon type="arrow-up" />
            Trending
        </Menu.Item>
        <Menu.Item key="3">
            <Icon type="up" />
            Price high to low
        </Menu.Item>
        <Menu.Item key="4">
            <Icon type="down" />
            Price low to high
        </Menu.Item>
    </Menu>
);
class SearchComponent extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("Lets see if props got here", this.props.value);
        this.getProducts();
        this.getStores();
    }

    getProducts() {
        Axios.get("/api/products").then(res => {
            const products = res.data;
            console.log("products data is", products);
            this.setState({ products: products });
        });
    }

    getStores() {
        Axios.get("/api/shops").then(res => {
            const shops = res.data;
            console.log("Shops are", shops);
            this.setState({ shops: shops });
        });
    }
    state = {};

    render() {
        return (
            <div>
                <Row>
                    <Col span={16} offset={4}>
                        <Row>
                            <Col span={4}>
                                <h2>Search Results:</h2>
                            </Col>
                            <Col span={6} offset={12}>
                                <Row>
                                    <Col span={6}>
                                        {" "}
                                        <h2>Sort by:</h2>
                                    </Col>
                                    <Col span={12}>
                                        <Dropdown overlay={menu}>
                                            <Button style={{ marginLeft: 8 }}>
                                                <Icon type="down" />
                                            </Button>
                                        </Dropdown>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col lg={16} offset={4}>
                        {this.state.shops && (
                            <Stores
                                shops={this.state.shops}
                                title="Stores"
                                size={6}
                                getShops={this.getStores}
                            />
                        )}
                        {this.state.products && (
                            <Products
                                products={this.state.products}
                                title="Products"
                                size={6}
                            />
                        )}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default SearchComponent;
