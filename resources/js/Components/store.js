import React, { Component } from "react";
import {
    Col,
    Card,
    Row,
    Carousel,
    Button,
    Layout,
    List,
    Avatar,
    Rate,
    Icon
} from "antd";
import Products from "./LimitedProducts";
import axios from "axios";
import FAQs from "./LimitedFaqs";
import StorePosts from "./StorePosts";
import Reviews from "./Reviews";
import StoreDetails from "./storeDetails";

import "../css/sbar.css";
import MenuItem from "antd/lib/menu/MenuItem";
const { Meta } = Card;
class Store extends Component {
    state = {
        products: [],
        store: {},
        faqs: [],
        posts: [],
        Reviews: []
    };
    componentDidMount() {
        console.log('params received in props',this.props.match.params);
        axios.get("/api/shops/" + this.props.match.params.id).then(res => {
            const storedata = res.data;
            console.log(storedata);
            this.setState({ store: storedata });
        });

        axios
            .get("/api/products/shop/" + this.props.match.params.id)
            .then(res => {
                const productsData = res.data;
                console.log(productsData);
                this.setState({ products: productsData });
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
                                    src={this.state.store.display_picture}
                                    width="100%"
                                    height="100%"
                                    alt="image"
                                />
                            </div>
                            <div>
                                <img
                                    src={this.state.store.display_picture}
                                    width="100%"
                                    height="100%"
                                    alt="image"
                                />
                            </div>
                            <div>
                                <img
                                    src={this.state.store.display_picture}
                                    width="100%"
                                    height="100%"
                                    alt="image"
                                />
                            </div>
                            <div>
                                <img
                                    src={this.state.store.display_picture}
                                    width="100%"
                                    height="100%"
                                    alt="image"
                                />
                            </div>
                            <div>
                                <img
                                    src={this.state.store.display_picture}
                                    width="100%"
                                    height="100%"
                                    alt="image"
                                />
                            </div>
                        </Carousel>
                    </Col>
                </Row>
                <Row style={{ marginTop: "3%" }}>
                    <Col span={12} offset={6}>
                        <Card
                            title={
                                <h1 style={{ textAlign: "center" }}>
                                    Information
                                </h1>
                            }
                            bordered={false}
                            extra={
                                <div>
                                    <Button
                                        icon="plus"
                                        size="large"
                                        shape="round"
                                        style={{
                                            backgroundColor: "#F57224",
                                            color: "white"
                                        }}
                                    >
                                        Follow
                                    </Button>
                                    <Button
                                        icon="message"
                                        size="large"
                                        shape="round"
                                        style={{
                                            backgroundColor: "#F57224",
                                            color: "white"
                                        }}
                                    >
                                        Message
                                    </Button>
                                    <div>
                                        Number of Followers{" "}
                                        <span>
                                            <Rate disabled defaultValue={3} />
                                        </span>
                                    </div>
                                </div>
                            }
                        >
                        </Card>
                    </Col>
                    {this.state.store &&
                    <StoreDetails details={this.state.store} />
                    }

                </Row>
                <Row>
                    <Col lg={14} offset={6}>
                        <Products products={this.state.products} />
                    </Col>
                </Row>
                <Row>
                    <Col lg={14} offset={6}>
                        <FAQs id={this.props.match.params.id} />
                    </Col>
                </Row>

                <Row>
                    <Col lg={14} offset={6}>
                        <StorePosts id={this.props.match.params.id} />
                    </Col>
                </Row>

                <Row>
                    <Col lg={14} offset={6}>
                        <Reviews id={this.props.match.params.id} />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Store;
