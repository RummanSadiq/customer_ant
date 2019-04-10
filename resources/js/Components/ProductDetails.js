import React, { Component } from "react";
import { Row, Col, Rate, Button, Card, Avatar, List } from "antd";
import Reviews from './Reviews';
import Products from "./LimitedProducts";


class ProductDetails extends Component {
    state = {};
    render() {
        return (
            <div style={{ marginTop: "2%" }}>
                <Row>
                    <Col span={8} offset={4}>
                        <img
                            src={
                                "https://cdn.pixabay.com/photo/2019/04/08/21/46/harley-davidson-4113065_960_720.jpg"
                            }
                            width={400}
                            height={400}
                        />
                    </Col>
                    <Col span={8}>
                        <h1>
                            HP 15 Laptop 15.6" Touchscreen , Intel Pentium
                            Silver N5000, Intel UHD Graphics 605, 500GB HDD, 4GB
                            SDRAM, DVD, Scarlet Red, 15-bs244wm
                        </h1>
                        <Rate disabled defaultValue={4} />
                        <span>47 reviews</span>
                        <span>Shop name</span>
                        <h2>$349.00</h2>
                        <h4>Address</h4>
                        <Button
                            type="primary"
                            size="large"
                            shape="round"
                            icon="plus"
                        >
                            Add to Cart
                        </Button>
                        <span>Store doesn't provide shipping</span>
                    </Col>
                </Row>
                <hr/>
                <Row style={{backgroundColor:'white'}}>
                    <Col span={16} offset={4}>
                   <Reviews/>
                    </Col>
                </Row>
                <Row style={{backgroundColor:'white'}}>
                    <Col span={16} offset={4}>
                   <Products/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ProductDetails;
