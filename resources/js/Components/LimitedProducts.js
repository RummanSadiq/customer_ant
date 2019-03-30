import React, { Component } from 'react';
import { Row, Col, Card, Button, Carousel, List, Avatar, Icon } from "antd";


const { Meta } = Card;
class Products extends Component {
    constructor (props){
        super(props);
        // this.setState({products : this.props});
        this.state.products=this.props.products;

    }
    state = {  
        products:[]
    }

    componentDidMount(){
        console.log('received props are',this.state.products);
        // this.setState({products : this.props});
    }
    render() { 
        return ( 
                <Card
                    title={<h2>Products</h2>}
                    extra={<Button icon="plus">All</Button>}
                    bordered={false}
                    style={{ background: "#ECECEC" }}
                >
                    <List
                        grid={{
                            gutter: 18,
                            column: 4,
                            // xs: 1,
                            // sm: 2,
                            // md: 1,
                            // lg: 1,
                            xl: 6
                            // xxl: 3
                        }}
                        pagination={{
                            onChange: page => {
                                console.log(page);
                            },
                            pageSize: 6
                        }}
                        dataSource={this.props.products}
                        renderItem={element => (
                            <List.Item style={{padding: '3%'}}>
                                <Card
                                    hoverable
                                    cover={
                                        <img
                                            alt="product picture"
                                            src={element.display_picture}
                                        />
                                    }
                                    style={{ width: 240 }}

                                    // style={{ width: 188, height: 290, padding: '5%' }}
                                >
                                    <Meta
                                        title={element.name}
                                        description={<div style={{color:'#F57224'}}>Rs.{element.price}</div>}
                                    />
                                </Card>
                            </List.Item>
                        )}
                    />
                </Card>
           
         );
    }
}
 
export default Products;