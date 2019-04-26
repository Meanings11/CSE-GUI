import React, {Component} from 'react';
import {ReviewList} from './ReviewList';
import {ReviewForm} from './ReviewForm';
import { ProductRepository } from '../api/ProductRepository';
import { Link } from 'react-router-dom';
import CartService from './../services/cartService'


export class ProductDetail extends React.Component{
    productRepository = new ProductRepository;
    cartService = new CartService();
    
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
                            
                            <div className = "col-md-5 p-5">  
                                <img src = { `http://johnlawrimore.com/smu/${this.state.imageName}`}  className="img-fluid" alt="Responsive image"/>
                            </div>

                            <div className = "col-md-6 pt-0 pr-5 pl-3">
                                <h3>{this.state.name}</h3>
                                <h3><span className="badge badge-lg badge-primary">${this.state.price}</span></h3>
                                <p>{this.state.description}</p>

                                <Link to="/cart" className="btn btn-warning float-right mt-5 mr-3"
                                        onClick={()=> this.cartService.addToCart(this.state)}>
                                        Add to Cart
                                    </Link>
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