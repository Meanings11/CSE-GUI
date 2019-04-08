import React, {Component} from 'react';
import {Product} from './../models/Product';
import {ProductReview} from './../models/ProductReview';
import {ReviewList} from './ReviewList';
import {ReviewForm} from './ReviewForm';

export class ProductDetail extends React.Component{
    
    state = {
        product: new Product(
            1,
            "Jif Peanut Butter, 40 ounce",
            "7g of Protein per serving with no preservatives, artifical flavors or colors.", 
            7.99,
            "http://johnlawrimore.com/smu/101.png",
            []
        )   
    };

    onReviewAdded(review){
            this.setState(state =>{
                state.product.reviews.push(review);
                return state;
            });
    };

    render(){
        return (
            <>
                <main>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Tasty snacks</a></li>
                        <li className="breadcrumb-item active" aria-current="page">{this.state.product.name}</li>  
                    </ol>
                </nav>

                <div className ="jumbotron bg-light" style={{minHeight: '500px'}}>
                    <div className = "pb-5 pt-1">
                        <div className = "float-left product-img mr-4 ml-1">  
                            <img src = {this.state.product.imageUrl}/>
                        </div>

                        <h1>{this.state.product.name}</h1>
                        <h3><span className="badge badge-lg badge-primary">{this.state.product.price}</span></h3>
                        <p>{this.state.product.description}</p>
                    </div>
                </div>
                </main>

            <ReviewList reviews = {this.state.product.reviews}/>
            <ReviewForm onReviewAdded={a => this.onReviewAdded(a)}/>
            </>
        );
    }
}

export default ProductDetail;