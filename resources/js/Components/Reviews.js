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
            // {
            //     title: `ant design part`,
            //     avatar:
            //         "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            //     description:
            //         "Ant Design, a design language for background applications, is refined by Ant UED Team.",
            //     content:
            //         "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
            // },
            // {
            //     title: `ant design part`,
            //     avatar:
            //         "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            //     description:
            //         "Ant Design, a design language for background applications, is refined by Ant UED Team.",
            //     content:
            //         "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
            // },
            // {
            //     title: `ant design part`,
            //     avatar:
            //         "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            //     description:
            //         "Ant Design, a design language for background applications, is refined by Ant UED Team.",
            //     content:
            //         "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
            // },
            // {
            //     title: `ant design part`,
            //     avatar:
            //         "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            //     description:
            //         "Ant Design, a design language for background applications, is refined by Ant UED Team.",
            //     content:
            //         "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
            // }
        ]
    };

    componentDidMount(){
      axios.get("/api/reviews" + this.props.id).then(res => {
        const reviewsData = res.data;
        console.log("Reviews  are", reviewsData);
        this.setState({ Reviews: reviewsData });
    });    }
    render() {
        return (
            <div>
                <Row>
                    <Col
                        xs={6}
                        sm={6}
                        md={8}
                        lg={16}
                        offset={4}
                        type="flex"
                        justify="start"
                    >
                        <Card
                            title="User Reviews"
                            bordered={false}
                            extra={<Button icon="plus">More</Button>}
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
                                // footer={
                                //   <div>
                                //     <b>ant design</b> footer part
                                //   </div>
                                // }
                                renderItem={item => (
                                    <List.Item
                                        key={item.title}
                                        // actions={[
                                        //   <IconText type="star-o" text="156" />,
                                        //   <IconText type="like-o" text="156" />,
                                        //   <IconText type="message" text="2" />
                                        // ]}
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
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Reviews;
