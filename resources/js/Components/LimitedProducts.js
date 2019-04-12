import React, { Component } from "react";
import { Row, Col, Card, Button, Carousel, List, Avatar, Icon } from "antd";
import { NavLink, Route, Redirect } from "react-router-dom";
import ProductDetails from "./ProductDetails";
const { Meta } = Card;
class Products extends Component {
    constructor(props) {
        super(props);
        this.state.products = this.props.products;
        this.state.title = this.props.title;
        this.state.size = this.props.size;
    }
    state = {
        products: [],
        redirect: false
    };
    renderRedirect = id => {
        if (this.state.redirect) {
            return <Redirect to={"/product/" + id} />;
        }
    };
    setRedirect = () => {
        this.setState({
            redirect: true
        });
    };
    componentDidMount() {
        console.log("received props are", this.props.products);
    }
    render() {
        return (
            <Card
                title={<h2>{this.state.title}</h2>}
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
                        pageSize: this.state.size
                    }}
                    dataSource={this.props.products}
                    renderItem={element => (
                        <List.Item style={{ padding: "3%" }}>
                            {this.renderRedirect(element.id)}
                            <Card
                                hoverable
                                cover={
                                    <div>
                                        <img
                                            alt="example"
                                            src={element.display_picture}
                                            onClick={this.setRedirect}
                                        />
                                    </div>
                                }
                                style={{
                                    width: 188,
                                    height: 290,
                                    padding: "5%"
                                }}
                            >
                                {" "}
                                <Meta
                                    title={element.name}
                                    description={element.category}
                                />{" "}
                                <List.Item.Meta
                                    // avatar={
                                    //     <Avatar src={element.store_picture} />
                                    // }
                                    title={
                                        <NavLink
                                            to={"store/" + element.store_id}
                                        >
                                            {element.store_name}
                                        </NavLink>
                                    }
                                    description={
                                        <div>
                                            <h3 style={{ color: "#F57224" }}>
                                                Rs.{element.price}
                                            </h3>

                                            <Button
                                                icon="shopping-cart"
                                                block
                                                style={{
                                                    backgroundColor: "#F57224",
                                                    color: "white"
                                                }}
                                            >
                                                Add to List
                                            </Button>
                                        </div>
                                    }
                                />
                            </Card>
                        </List.Item>
                    )}
                />
            </Card>
        );
    }
}

export default Products;
