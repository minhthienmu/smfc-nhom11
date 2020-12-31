import React, { Component } from 'react';
import {Switch,Route} from "react-router-dom";
import Homepage from '../homepage/homepage';
import Products from '../products/Products.js';
import DetailProduct from '../detail/detailProduct.js';
import cart from '../cart/cart.js';
class RouterURL extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Products}/>
                    <Route path="/products" component={Products}/>
                    <Route path="/product/detail/:id" component={DetailProduct}></Route>
                    <Route path="/cart/" component ={cart}></Route>
                    <Route component={Homepage}></Route>
                    
                </Switch>
            </div>
        );
    }
}

export default RouterURL;