import React, { Component } from "react";
import { Row, Col, Card, Button, Carousel, List, Tabs, Icon } from "antd";
import { NavLink } from "react-router-dom";
import Axios from "axios";
import store from "../Images/store.jpg";


const { Meta } = Card;
class Stores extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        shops: []
    };

    componentDidMount() {
        Axios.get("/api/shops").then(res => {
            const shops = res.data;
            console.log('Shops are', shops);
            this.setState({ shops: shops });
        });
    }
    render() {
        return (
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
        );
    }
}

export default Stores;
