import React, {Component} from 'react';

export const ReviewList = (props) => (
    <>
    <div className ="m-2">
        <h4>Product Reviews({props.length})</h4>

        {/* {props.length&& */}
            <div class="alert alert-primary" role="alert">
                <strong>Be the first to add a reiview!</strong>   
            </div>
        {/* } */}

        {/* {!props.length&& */}
             <div className = "card">
                <div className = "card-header">
                    {props.rating}
                </div>

                <div className="card-body p-2">
                    <div className="time float-right">
                        date
                    </div>
                    <div className="author">
                        {props.userName}
                    </div>
                    
                    <p>{props.comment}</p>
                </div>
            </div>
        {/* } */}
    </div>
    </>
);

export default ReviewList;