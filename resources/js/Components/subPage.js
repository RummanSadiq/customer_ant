import React, { Component } from 'react';
import HomePage from "./HomePage";
import Store from './store';
import { BrowserRouter, Route } from "react-router-dom";


class SubPage extends Component {
    state = {  }
    render() { 
        return (  
            <BrowserRouter>
            <div>
                <Route path="/store/:id" component={Store}/>
                <Route exact path="/" component={HomePage}/>
            </div>
                
            </BrowserRouter>

        );
    }
}
 
export default SubPage;