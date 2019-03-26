import React, { Component } from "react";
import { Row, Col, Card, Button, Carousel, List, Avatar, Icon } from "antd";
import { NavLink } from "react-router-dom";

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
        shops:[]
    };
    componentDidMount (){
      Axios.get('/api/shops').then(res => {
        const shops = res.data;
        this.setState({ shops: shops });
        console.log(shops);
    });


Axios.get('/api/allproducts').then(res => {
  const products = res.data;
  this.setState({ products: products });
  console.log(shops);
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
                    <Col lg={14} offset={4}>
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
                            <NavLink to={'store/'+element.id}>
                                    
                                        <Card
                                            hoverable
                                            cover={
                                                <img
                                                    alt="example"
                                                    src={element.display_picture}
                                                />
                                            }
                                            style={{ width: 240 }}
                                        >
                                            <Meta
                                                title={element.name}
                                                description={element.contact}
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
                    <Col lg={14} offset={4}>
                        <Card
                            title={<h2>Products</h2>}
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
                                dataSource={this.state.products}
                                renderItem={element => (
                                    <List.Item>
                                        <Card
                                            hoverable
                                            cover={
                                                <img
                                                    alt="example"
                                                    src={store}
                                                />
                                            }
                                            style={{ width: 188, height: 290 }}
                                        >
                                            <Meta
                                                title={element.name}
                                                description={element.price}
                                            />
                                        </Card>
                                    </List.Item>
                                )}
                            />
                        </Card>
                    </Col>
                </Row>
                {/* 
                        <Card
                            title={<h2>Stores</h2>}
                            extra={<Button icon="plus">More</Button>}
                            bordered={false}
                            style={{ background: "#ECECEC" }}
                        >
                            <Row gutter={18}>
                                {this.state.products.map(element => (
                                    <Col lg={4} sm={4} md={2} xs={8} span={16}>
                               
                                    </Col>
                                ))}
                            </Row>
                        </Card> */}
            </div>
        );
    }
}

export default HomePage;
