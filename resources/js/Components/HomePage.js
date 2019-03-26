import React, { Component } from "react";
import { Row, Col, Card, Button, Carousel, List, Avatar, Icon } from "antd";
import { NavLink } from "react-router-dom";
import Products from "./LimitedProducts";

import cimage from "../Images/img1.jpg";
import pimage from "../Images/pimg.png";
import store from "../Images/store.jpg";
import Axios from "axios";

const { Meta } = Card;
class HomePage extends Component {
    state = {
        products: [
            // { picture: "", name: "Product name here", price: "250$" },
            // {
            //     picture: "",
            //     name: "Product name here",
            //     price: "250$"
            // },
            // { picture: "", name: "Product name here", price: "250$" },
            // {
            //     picture: "",
            //     name: "Product name here",
            //     price: "250$"
            // },
            // { picture: "", name: "Product name here", price: "250$" },
            // {
            //     picture: "",
            //     name: "Product name here",
            //     price: "250$"
            // }
        ],
        shops: [],
        done: false
    };
    componentDidMount() {
        Axios.get("/api/shops").then(res => {
            const shops = res.data;
            this.setState({ shops: shops });
        });

        Axios.get("/api/allproducts").then(res => {
            const products = res.data;
            this.setState({ products: products });
            //     , ()=>{
            //     this.setState({done:!this.state.done});
            //   });
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
                <Row>
                    <Col lg={14} offset={6}>
                        <Card
                            title={<h2>Stores</h2>}
                            extra={<Button icon="plus">All</Button>}
                            bordered={false}
                            style={{ background: "#ECECEC" }}
                        >
                            <List
                                grid={{
                                    gutter: 18,
                                    column: 4,
                                    // xs: 1,
                                    // sm: 2,
                                    // md: 1,
                                    // lg: 1,
                                    xl: 6
                                    // xxl: 3
                                }}
                                pagination={{
                                    onChange: page => {
                                        console.log(page);
                                    },
                                    pageSize: 6
                                }}
                                dataSource={this.state.shops}
                                renderItem={element => (
                                    <List.Item
                                    //     <NavLink to="/store">

                                    // </NavLink>
                                    >
                                        <NavLink to={"store/" + element.id}>
                                            <Card
                                                hoverable
                                                cover={
                                                    <img
                                                        alt="example"
                                                        src={
                                                            element.display_picture
                                                        }
                                                    />
                                                }
                                                style={{ width: 240 }}
                                            >
                                                <Meta
                                                    title={element.name}
                                                    description={
                                                        element.contact
                                                    }
                                                />
                                            </Card>
                                        </NavLink>
                                    </List.Item>
                                )}
                            />
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col lg={14} offset={6}>
                        <Products products={this.state.products} />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default HomePage;
