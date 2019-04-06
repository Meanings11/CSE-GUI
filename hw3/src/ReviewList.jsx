import React from 'react';

export const ReviewList = (props) => (

    <div className ="m-2">
        <h4>Product Reviews</h4>
        <div className = "card">
            <div className = "card-header">
                ****
            </div>

            <div className="card-body p-2">
                <div className="time float-right">
                    date
                </div>
                <div className="author">
                    name
                </div>
                
                <p>comments</p>
            </div>
        </div>
    </div>
);

export default ReviewList;