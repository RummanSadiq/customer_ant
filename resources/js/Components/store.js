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
import FAQs from './LimitedFaqs';
import StorePosts from './StorePosts';
import Reviews from './Reviews';


import "../css/sbar.css";
import MenuItem from "antd/lib/menu/MenuItem";
const { Meta } = Card;
class Store extends Component {
    state = {
        products: [],
        store: {},
        faqs: [],
        posts:[],
        Reviews: [
            {
                title: `ant design part`,
                avatar:
                    "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                description:
                    "Ant Design, a design language for background applications, is refined by Ant UED Team.",
                content:
                    "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
            },
            {
                title: `ant design part`,
                avatar:
                    "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                description:
                    "Ant Design, a design language for background applications, is refined by Ant UED Team.",
                content:
                    "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
            },
            {
                title: `ant design part`,
                avatar:
                    "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                description:
                    "Ant Design, a design language for background applications, is refined by Ant UED Team.",
                content:
                    "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
            },
            {
                title: `ant design part`,
                avatar:
                    "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                description:
                    "Ant Design, a design language for background applications, is refined by Ant UED Team.",
                content:
                    "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
            },
            {
                title: `ant design part`,
                avatar:
                    "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                description:
                    "Ant Design, a design language for background applications, is refined by Ant UED Team.",
                content:
                    "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
            }
        ]
    };
    componentDidMount() {
        console.log(this.props.match.params);
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
                                        style={{ backgroundColor: "#F57224", color:'white' }}
                                    >
                                        Follow
                                    </Button>
                                    <Button
                                        icon="message"
                                        size="large"
                                        shape="round"
                                        style={{ backgroundColor: "#F57224", color:'white' }}
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
                            <div
                                style={{
                                    fontWeight: "bold"
                                }}
                            >
                                <Row>
                                    <Col span={12} className="infoColumns">
                                        <span>Store Type: </span>
                                        {this.state.store.store_type}
                                    </Col>

                                    <Col span={12} className="infoColumns">
                                        <span style={{ fontWeight: "bold" }}>
                                            Store Contact:{" "}
                                        </span>
                                        {this.state.store.contact}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12} className="infoColumns">
                                        <span>Store Address: </span>
                                        {this.state.store.address}
                                    </Col>
                                    <Col span={12} className="infoColumns">
                                        <span>Store City: </span>
                                        {this.state.store.store_type}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12} className="infoColumns">
                                        <span>Store opens At: </span>
                                        {this.state.store.open_time}
                                    </Col>
                                    <Col span={12} className="infoColumns">
                                        {" "}
                                        <span>Closing Time</span>
                                        {this.state.store.close_time}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={12} className="infoColumns">
                                        {this.state.store.delivery > 0 && (
                                            <span>Store Provides Delivery</span>
                                        )}
                                        {this.state.delivery <= 0 && (
                                            <span>
                                                Store does not Provide Delivery
                                            </span>
                                        )}
                                    </Col>
                                    <Col span={12} className="infoColumns">
                                        {" "}
                                        {this.state.store.wifi > 0 && (
                                            <span>
                                                <Icon type="wifi" />
                                                Store has Wifi
                                            </span>
                                        )}
                                        {!this.state.store.wifi > 0 && (
                                            <span>
                                                <Icon
                                                    type="wifi"
                                                    style={{
                                                        color: "#F81D22"
                                                    }}
                                                />
                                                /> Store does not have Wifi
                                            </span>
                                        )}
                                    </Col>
                                </Row>

                                <Row>
                                    <Col span={12} className="infoColumns">
                                        {" "}
                                        {this.state.store.card_payment > 0 && (
                                            <span>
                                                <Icon
                                                    type="credit-card"
                                                    theme="twoTone"
                                                />
                                                Store has Card Payment
                                            </span>
                                        )}
                                        {!this.state.store.card_payment > 0 && (
                                            <span>
                                                <Icon
                                                    type="credit-card"
                                                    theme="filled"
                                                    style={{
                                                        fontSize: "50px",
                                                        color: "#F81D22"
                                                    }}
                                                />
                                                Store does not have Card Payment
                                            </span>
                                        )}
                                    </Col>
                                    {/* <Col span={12} className="infoColumns" /> */}
                                </Row>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col lg={14} offset={6}>
                        <Products products={this.state.products} />
                    </Col>
                </Row>
                <Row>
                    <Col lg={14} offset={6}>
                        <FAQs id={this.props.match.params.id}/>
                    </Col>
                </Row>
                
                <Row>
                    <Col lg={14} offset={6}>
                        <StorePosts id={this.props.match.params.id}/>
                    </Col>
                </Row>

                <Row>
                    <Col lg={14} offset={6}>
                        <Reviews id={this.props.match.params.id}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Store;
