import React, {Component} from 'react';

export const Body = (props) =>(
    <div className="inner cover text-center mt-5">
          <h1 className="cover-heading">Car Auction</h1>
          <p className="lead">
            <button className="btn btn-lg btn-danger"
            onClick={e=> this.onBuy} >Buy</button>
            <button className="btn btn-lg btn-secondary ml-1">Sell</button>
          </p>
    </div>

);

export default Body;