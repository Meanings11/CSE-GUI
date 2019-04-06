import React, {Component} from 'react';
import {Product} from './models/Product';
import {ProductReview} from './models/ProductReview';

export class ProductDetail extends React.Component{

    state = {
        product:new Product(
            1,
            "Jif Peanut, 40 ounce",
            "7g of Protein per serving with no preservatives, artifical flavors or colors.", 
            7.99,
            "http://johnlawrimore.com/smu/101.png",
            []
        )   
    };

    render(){
        return (
            <main>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Tasty snacks</a></li>
                    <li className="breadcrumb-item active" aria-current="page">{this.state.product.name}</li>  
                </ol>
            </nav>

            <div className ="jumbotron">
                
                <div className = "float-left product-img mr-4 ml-1">  
                    <img src = {this.state.product.imageUrl} width="200" height="300"/>
                </div>

                <h1>{this.state.product.name}</h1>
                <h3><span class="badge badge-lg badge-primary">{this.state.product.price}</span></h3>
                <p>{this.state.product.description}</p>
            </div>
            </main>
        );
    }
}

export default ProductDetail;