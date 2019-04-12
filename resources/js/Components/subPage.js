import React, { Component } from 'react';
import HomePage from "./HomePage";
import Store from './store';
import SearchComponent from './Search';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ProductDetails from './ProductDetails';


class SubPage extends Component {
    state = {  }
    render() { 
        return (  
            <BrowserRouter>
            <Switch>
                <Route path="/store/:id" component={Store}/>
                <Route exact path="/" component={HomePage}/>
                <Route exact path='/product/:id' component={ProductDetails}/>
                <Route  path="/search" component={ SearchComponent }/>
                <Redirect from ='/' to='/search'/>

            </Switch>
                
            </BrowserRouter>

        );
    }
}
 
export default SubPage;