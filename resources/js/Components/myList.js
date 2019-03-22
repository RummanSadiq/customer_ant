import React, { Component } from 'react';
import {
    Row,
    Col,
    List,
    Rate,
    Avatar,
    Button,
    Dropdown,
    Icon,
    Menu
  } from "antd";

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Icon type="user" />
        1st menu item
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="user" />
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="user" />
        3rd item
      </Menu.Item>
    </Menu>
  );
class MyList extends Component {
    state = {
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
          <Row>
            <Col span={16} offset={6}>
              <div>
                <Row>
                  <Col span={4}>
                    <h2>My List</h2>
                  </Col>
                  <Col span={6} offset={12}>
                    {/* <Row>
                      <Col span={6}>
                        {" "}
                        <h2>Sort by:</h2>
                      </Col>
                      <Col span={12}>
                        <Dropdown overlay={menu}>
                          <Button style={{ marginLeft: 8 }}>
                            <Icon type="down" />
                          </Button>
                        </Dropdown>
                      </Col>
                    </Row> */}
                  </Col>
                </Row>
              </div>
    
              <List
                itemLayout="vertical"
                size="large"
                pagination={{
                  onChange: page => {
                    console.log(page);
                  },
                  pageSize: 10
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
                    // extra={
                    //   <img
                    //     width={272}
                    //     alt="logo"
                    //     src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                    //   />
                    // }
                  >
                   <Row>
                  <Col span={4}>
                    <img
                      height={272}
                      width={200}
                      alt="logo"
                      src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                    />
                  </Col>
                  <Col span={12}>
                  {<div><h2>{item.title}</h2>Store name here</div>}
                  {/* {<div><br/></div>} */}
                    {item.content}
                  </Col>
                  <Col span={4}>
                    <div style={{ padding: "20px" }}>$50</div>
                  </Col>
                </Row>
                <List.Item.Meta
                      // avatar={<Avatar src={item.avatar} />}
                      title="Product name here"
                      description={<Rate disabled defaultValue={2} />}
                    />
              </List.Item>
                )}
              />
            </Col>
          </Row>
        );
    }
}
 
export default MyList;