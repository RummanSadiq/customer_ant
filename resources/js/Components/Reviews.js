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
import axios from "axios";
class Reviews extends Component {
    constructor(props) {
        super(props);
        this.state.Reviews = this.props.Reviews;
        this.state.title = this.props.title;
        this.state.size = this.props.size;
    }
    state = {
        Reviews: []
    };

    componentDidMount() {
        // axios.get("/api/reviews/shops/").then(res => {
        //     const reviewsData = res.data;
        //     console.log("Reviews  are", reviewsData);
        //     this.setState({ Reviews: reviewsData });
        // });
    }
    render() {
        return (
            <div>
                
                <Card
                    title={<h2>{this.state.title}</h2>}
                    bordered={false}
                    extra={<Button icon="plus">Add a Review</Button>}
                    style={{ background: "#ECECEC" }}
                >
                    <List
                        itemLayout="vertical"
                        size="large"
                        pagination={{
                            onChange: page => {
                                console.log(page);
                            },
                            pageSize: this.state.size
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
                                    avatar={<Avatar src={item.avatar} />}
                                    title={<a href={item.href}>{item.username}</a>}
                                    description={
                                        
                                        <Rate disabled defaultValue={item.rating} />
                                    }
                                />
                                {item.description}
                            </List.Item>
                        )}
                    />
                </Card>
            </div>
        );
    }
}

export default Reviews;
