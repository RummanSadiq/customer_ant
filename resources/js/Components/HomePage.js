import React, { Component } from "react";
import { Row, Col, Card, Button, Carousel, List, Tabs, Icon } from "antd";
import Products from "./LimitedProducts";
import AllPosts from "./AllPosts";
import Stores from "./LimitedStores";
import cimage from "../Images/img1.jpg";
import pimage from "../Images/pimg.png";
import Axios from "axios";

const { TabPane } = Tabs;
class HomePage extends Component {
    state = {
        products: [],
        shops: [],
        done: false
    };
    componentDidMount() {
        Axios.get("/api/products").then(res => {
            const products = res.data;
            console.log("Products data is", products);
            this.setState({ products: products });
        });

        Axios.get("/api/user").then(res => {
            const products = res.data;
            console.log("User data is", products);
        });
    }
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <Carousel>
                            <div>
                                <img
                                    src={cimage}
                                    width="100%"
                                    height="100%"
                                    alt="image"
                                />
                            </div>
                            <div>
                                <img
                                    src={cimage}
                                    width="100%"
                                    height="100%"
                                    alt="image"
                                />
                            </div>
                            <div>
                                <img
                                    src={cimage}
                                    width="100%"
                                    height="100%"
                                    alt="image"
                                />
                            </div>
                            <div>
                                <img
                                    src={cimage}
                                    width="100%"
                                    height="100%"
                                    alt="image"
                                />
                            </div>
                            <div>
                                <img
                                    src={cimage}
                                    width="100%"
                                    height="100%"
                                    alt="image"
                                />
                            </div>
                        </Carousel>
                    </Col>
                </Row>
                <Col>
                    {" "}
                    <Tabs
                        defaultActiveKey="1"
                        size={"large"}
                        style={{ textAlign: "center" }}
                    >
                        <TabPane tab="Browse" key="1">
                            <Row>
                                <Col lg={14} offset={6}>
                                    <Stores />
                                    <Products products={this.state.products} />
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tab="Explore" key="2">
                            <Row>
                                <Col lg={14} offset={6}>
                                    <AllPosts />
                                </Col>
                            </Row>
                        </TabPane>
                    </Tabs>
                </Col>
            </div>
        );
    }
}

export default HomePage;
