import React, {Component} from 'react';
import {Product} from './../models/Product';
import {ProductReview} from './../models/ProductReview';
import {ReviewList} from './ReviewList';
import {ReviewForm} from './ReviewForm';
import { ProductRepository } from '../api/ProductRepository';
import { Link } from 'react-router-dom';


export class ProductDetail extends React.Component{
    productRepository = new ProductRepository;
    
    state = {
        id: 0,
        name: '',
        description: '',
        price: 0,
        imageNmae: '',
        reviews: ''
    };

    onReviewAdded(review){
            this.setState(state =>{
                state.reviews.push(review);
                return state;
            });

            this.productRepository.addReview(this.state.id,review);
    };

    render(){
        return (
            <>
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to='/' >Tasty snacks</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">{this.state.name}</li>  
                    </ol>
                </nav>

                <div className ="jumbotron bg-light jumbotron-fluid">
                    <div className="container-fluid">

                        <div className="row">
                            
                            <div className = "col-md-4 p-3">  
                                <img src = { `http://johnlawrimore.com/smu/${this.state.imageName}`}  className="img-fluid" alt="Responsive image"/>
                            </div>

                            <div className = "col-md-6 p-3">
                                <h1>{this.state.name}</h1>
                                <h3><span className="badge badge-lg badge-primary">${this.state.price}</span></h3>
                                <p>{this.state.description}</p>
                            </div>

                        </div>
                    </div>
                </div>
                
            <ReviewList reviews = {this.state.reviews}/>
            <ReviewForm onReviewAdded={a => this.onReviewAdded(a)}/>
            </div>

            </>
        );
    }

    componentDidMount() {
		console.log("Product Detail Mount Function");
		let productId = +this.props.match.params.productId;
        console.log(productId);
        if(productId){
            this.productRepository.getProduct(productId)
                .then(product => this.setState(product))
        }
    }


}
export default ProductDetail;