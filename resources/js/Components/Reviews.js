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
    Rate
} from "antd";
import axios from 'axios';
class Reviews extends Component {
    state = {
        Reviews: [

        ]
    };

    componentDidMount(){
      axios.get("/api/reviews/").then(res => {
        const reviewsData = res.data;
        console.log("Reviews  are", reviewsData);
        this.setState({ Reviews: reviewsData });
    });    }
    render() {
        return (
            <div>
                {/* <Row>
                    <Col
                        // xs={6}
                        // sm={6}
                        // md={8}
                        // lg={16}
                        offset={4}
                        type="flex"
                        justify="start"
                    > */}
                        <Card
                            title={<h2>User Reviews</h2>}
                            bordered={false}
                            extra={<Button icon="plus">More</Button>}
                            style={{ background: "#ECECEC" }}

                        >
                            <List
                                itemLayout="vertical"
                                size="large"
                                pagination={{
                                    onChange: page => {
                                        console.log(page);
                                    },
                                    pageSize: 3
                                }}
                                dataSource={this.state.Reviews}
                                renderItem={item => (
                                    <List.Item
                                        key={item.title}
                                        
                                        extra={
                                            <img
                                                width={272}
                                                alt="logo"
                                                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                            />
                                        }
                                    >
                                        <List.Item.Meta
                                            avatar={
                                                <Avatar src={item.avatar} />
                                            }
                                            title={
                                                <a href={item.href}>
                                                    {item.title}
                                                </a>
                                            }
                                            description={
                                                <Rate
                                                    disabled
                                                    defaultValue={2}
                                                />
                                            }
                                        />
                                        {item.content}
                                    </List.Item>
                                )}
                            />
                        </Card>
                    {/* </Col>
                </Row> */}
            </div>
        );
    }
}

export default Reviews;
