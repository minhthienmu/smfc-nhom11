import React, { Component } from 'react';
import ProductCard from './productCard/productCard.js';
import './products.css'
import helper from '../../helper/user.js';
import {Link} from "react-router-dom";
const allProduct = require('../../allProduct')
class Products extends Component {

    constructor(props){
        super(props);
        this.state={
            allProduct: allProduct
        }
    }
    async componentDidMount(){
        this.setState({allProduct:await helper.getAllProduct()});
    }
    render() {
        const {allProduct} =this.state;
        const cardProduct = allProduct[0] && allProduct.map((row,i)=>{
            return <ProductCard
                imageURL = {row.image[0]}
                name = {row.name}
                price ={row.price}
                key ={i}
                _id = {row._id}
                />
            })

        return (
            <div className="box">
                <div className="container">
                    <nav aria-label="breadcrumb">
                    <ol class="breadcrumb"> 
                        <li class="breadcrumb-item" aria-current="page">Home</li>
                    </ol>
                    </nav>
                    <div className="category float-left">
                        <p style={{fontWeight:'bold',fontSize:'16px'}}>Category</p>
                        <ul className="list-cate">
                            <li>All Category</li>
                            <li>Category name</li>
                            <li>Category name</li>
                            <li>Category name</li>
                        </ul>
                        <p style={{fontWeight:'bold',fontSize:'16px',marginTop:'100px'}}>Brands</p>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault1"></input>
                            <label class="form-check-label" for="flexCheckDefault">
                            Filter by brand item
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault2"></input>
                            <label class="form-check-label" for="flexCheckDefault">
                            Filter by brand item
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault3"></input>
                            <label class="form-check-label" for="flexCheckDefault">
                            Filter by brand item
                            </label>
                        </div>
                        <p style={{fontWeight:'bold',fontSize:'16px',marginTop:'100px'}}>Rating</p>
                        <div class="rating">
                            <div class="row">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault3"></input>
                                <div class="form-check-label">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                </div>
                            </div>
                            <div class="row">
                                <input class="form-check-input" type="checkbox" value=""></input>
                                <div class="form-check-label">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                </div>
                            </div>
                            <div class="row">
                                <input class="form-check-input" type="checkbox" value=""></input>
                                <div class="form-check-label">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                </div>
                            </div>
                            <div class="row">
                                <input class="form-check-input" type="checkbox" value=""></input>
                                <div class="form-check-label">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                </div>
                            </div>
                            <div class="row">
                                <input class="form-check-input" type="checkbox" value=""></input>
                                <div class="form-check-label">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                <span class="fa fa-star"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product-card grid-container">
                       
                            {cardProduct}

                    </div>
                </div>
            </div>
        );
    }
}

export default Products;