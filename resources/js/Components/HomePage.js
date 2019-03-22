import React, { Component } from "react";
import { Row, Col, Card, Button,Carousel } from "antd";
import cimage from "../Images/img1.jpg";
import pimage from "../Images/pimg.png";
import store from "../Images/store.jpg";

const { Meta } = Card;
class HomePage extends Component {
  state = {
    products: [
      { picture: "", name: "Product name here", price: "250$" },
      {
        picture: "",
        name:
          "Product name here",
        price: "250$"
      },
      { picture: "", name: "Product name here", price: "250$" },
      {
        picture: "",
        name:
          "Product name here",
        price: "250$"
      },
      { picture: "", name: "Product name here", price: "250$" },
      {
        picture: "",
        name:
          "Product name here",
        price: "250$"
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
      <Row>
        <Col lg={12} offset={6}>
          <Card title={<h2>Products</h2>} extra={<Button icon="plus">More</Button>} bordered={false} style={{ background: '#ECECEC'}}>
            <Row gutter={18}>
              {this.state.products.map(element => (
                <Col lg={4} sm={4} md={2} xs={8} span={16}>
                  <Card
                    hoverable
                    cover={<img alt="example" src={pimage} />}
                  >
                    <Meta
                      title={ 
                       element.name   
                      }
                      description={element.price}
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>

          <Card title={<h2>Stores</h2>} extra={<Button icon="plus">More</Button>} bordered={false} style={{ background: '#ECECEC'}}>
            <Row gutter={18}>
              {this.state.products.map(element => (
                <Col lg={4} sm={4} md={2} xs={8} span={16}>
                  <Card
                    hoverable
                    cover={<img alt="example" src={store} />}
                  >
                    <Meta
                      title={ 
                       element.name   
                      }
                      description={element.price}
                    />
                  </Card>
                </Col>
              ))}
            </Row>
          </Card>
         
        </Col>
      </Row> </div>
    );
  }
}

export default HomePage;
