import React, { Component } from "react";
import { Row, Col, Card, Button, Carousel, List, Tabs, Icon, Avatar } from "antd";
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
                title={<h2>Store Activity</h2>}
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
                    style={{ background: "white" }}
                    renderItem={element => (
                        // <List.Item>
                        //     <Card
                        //         hoverable={true}
                        //         bordered={false}
                        //         cover={element.description}
                        //     >
                        // <img
                        //     alt="postimage"
                        //     src={element.image_path}
                        //     width="900"
                        // />
                        //         <Meta description={element.created_at} />
                        //     </Card>
                        // </List.Item>
                        <List.Item
                            key={element.id}
                            // actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
                            extra={
                                <img
                                    width={272}
                                    height={200}
                                    alt="logo"
                                    src={element.image_path}
                                />
                            }
                        >
                            <List.Item.Meta
                                  avatar={<Avatar src={element.image_path} />}
                                title={
                                    <a href="">Store Name{element.store_id}</a>
                                }
                                description={element.created_at}
                            />

                           {element.description}
                        </List.Item>
                    )}
                />
            </Card>
        );
    }
}

export default StorePosts;
