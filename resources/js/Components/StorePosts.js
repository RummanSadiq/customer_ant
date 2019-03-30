import React, { Component } from "react";
import { Row, Col, Card, Button, Carousel, List, Tabs, Icon } from "antd";
import axios from "axios";

const { Meta } = Card;

class StorePosts extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        posts: []
    };

    componentDidMount() {
        axios.get("/api/posts/shop/" + this.props.id).then(res => {
            const postsData = res.data;
            console.log("Posts of this store are", postsData);
            this.setState({ posts: postsData });
        });
    }
    render() {
        return (
            <Card
                title={<h2>FAQs</h2>}
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
                    renderItem={element => (
                        <List.Item>
                            <Card
                                title={<h3> Store Activity </h3>}
                                type="inner"
                                hoverable="true"
                                bordered={false}
                                style={{ width: 1000 }}
                                headStyle={{ textAlign: "center" }}
                            >
                                <Card
                                    hoverable={true}
                                    bordered={false}
                                    cover={
                                        <img
                                            alt="postimage"
                                            src={element.image_path}
                                        />
                                    }
                                >
                                    {element.description}
                                    <Meta description={element.created_at} />
                                </Card>
                            </Card>
                        </List.Item>
                    )}
                />
            </Card>
        );
    }
}

export default StorePosts;
