import React, { Component } from "react";
import axios from "axios";
import { Row, Col, Card, Button,  List, Avatar, Icon } from "antd";

class AllPosts extends Component {
    state = {
        posts: []
    };

    componentDidMount() {
        axios.get("/api/posts").then(res => {
            const postsData = res.data;
            console.log("Posts of stores are", postsData);
            this.setState({ posts: postsData });
        });
    }
    render() {
        return (
            <Card
                title={<h2>Explore activities from Different Stores</h2>}
                extra={<Button icon="plus">All</Button>}
                bordered={false}
                style={{ background: "#ECECEC" }}
            >
                <List
                    itemLayout="vertical"
                    bordered
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 6
                    }}
                    dataSource={this.state.posts}
                    footer={
                        <div>
                            <b>ant design</b> footer part
                        </div>
                    }
                    style={{ background: "#F5F5F5" }}
                    renderItem={element => (
                        <List.Item
                            key={element.store_id}
                            style={{ textAlign: "left" }}
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={""} />}
                                title={
                                    <a href="">
                                        Store Name will be here
                                        {element.store_id.title}
                                    </a>
                                }
                                description={element.created_at}
                            />

                            <div style={{ marginLeft: "100" }}><h4>{element.description}</h4></div>

                            <div style={{ marginTop: "20" }}>
                                <img
                                    alt={element.description}
                                    src={element.image_path}
                                    width={1000}
                                />
                            </div>
                        </List.Item>
                    )}
                />
            </Card>
        );
    }
}

export default AllPosts;
