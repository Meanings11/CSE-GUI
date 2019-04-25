import React, {Component} from 'react';
import {ProductReview} from './../models/ProductReview'
import Rating from './Rating'

export const ReviewList = (props) => (
    <>
    <div className ="m-2">
        <h4>Product Reviews({props.reviews.length})</h4>

        {!props.reviews.length&&
            <div className="alert alert-primary" role="alert">
                <strong>Be the first to add a review!</strong>   
            </div>
        }

        
        {!!props.reviews.length&&
            <div>{
                props.reviews.map((r,i) =>
                <div className = "card mt-3 mb-3 bg-light" key = {i}>
                    <div className = "card-header font-weight-light">
                        <Rating value={r.rating}/>
                    </div>

                    <div className="card-body pl-4 pr-4 pt-2 pb-2">
                        <div className="time float-right text-secondary">
                            {r.date}
                        </div>
                        <div className="author text-secondary">
                            {r.userName}
                        </div>
                        
                        <p className="mt-1">"{r.comment}"</p>
                    </div>
                </div>
                )
            }
        </div>
        }
    </div>
    </>
);

export default ReviewList;