import React, {Component} from 'react';
import {Product} from './models/Product';
import {ProductReview} from './models/ProductReview';

export class ProductDetail extends React.Component{
    products = [
        new Product(

        )
    ];

    state = {

    };

    render(){
        return (
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Tasty snacks</a></li>
                    <li className="breadcrumb-item active" aria-current="page">ProductName</li>  
                </ol>
            </nav>

            <div className="jumbotron">
                <h1>Name</h1>

            </div>
        );
    }
}

export default ProductDetail;