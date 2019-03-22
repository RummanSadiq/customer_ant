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

import cimage from "../Images/img1.jpg";
import pimage from "../Images/pimg.png";

import "../css/sbar.css";
import MenuItem from "antd/lib/menu/MenuItem";
const { Meta } = Card;
const { Header, Content, Footer } = Layout;
class Store extends Component {
  state = {
    products: [
      { picture: "", name: "Product name here", price: "250$" },
      {
        picture: "",
        name: "Product name here",
        price: "250$"
      },
      { picture: "", name: "Product name here", price: "250$" },
      {
        picture: "",
        name: "Product name here",
        price: "250$"
      },
      { picture: "", name: "Product name here", price: "250$" },
      {
        picture: "",
        name: "Product name here",
        price: "250$"
      }
    ],
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
  render() {
    return (
      <div>
        <Row>
          <Col>
            <Carousel>
              <div>
                <img src={cimage} width="100%" height="100%" alt="image" />
              </div>
              <div>
                <img src={cimage} width="100%" height="100%" alt="image" />
              </div>
              <div>
                <img src={cimage} width="100%" height="100%" alt="image" />
              </div>
              <div>
                <img src={cimage} width="100%" height="100%" alt="image" />
              </div>
              <div>
                <img src={cimage} width="100%" height="100%" alt="image" />
              </div>
            </Carousel>
          </Col>
        </Row>
        <Row style={{ marginTop: "3%" }}>
          <Col span={12} offset={6}>
            <Card
              title={<h1 style={{ textAlign: "center" }}>Information</h1>}
              bordered={false}
              extra={
                <div>
                  <Button type="primary" icon="plus" size="large" shape="round">
                    Follow
                  </Button>
                  <Button
                    type="primary"
                    icon="message"
                    size="large"
                    shape="round"
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
              Store Information Here
            </Card>
          </Col>
        </Row>
        <Card
          title={<h2>Products</h2>}
          extra={<Button icon="plus">More</Button>}
          bordered={false}
          style={{ background: "#ECECEC" }}
        >
          <Row gutter={18}>
            {this.state.products.map(element => (
              <Col lg={4} sm={4} md={2} xs={8} span={16}>
                <Card hoverable cover={<img alt="example" src={pimage} />}>
                  <Meta title={element.name} description={element.price} />
                </Card>
              </Col>
            ))}
          </Row>
        </Card>
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
                      avatar={<Avatar src={item.avatar} />}
                      title={<a href={item.href}>{item.title}</a>}
                      description={<Rate disabled defaultValue={2} />}
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

export default Store;
