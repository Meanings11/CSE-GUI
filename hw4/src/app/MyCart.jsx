import React, { Component } from 'react';
import CartService from './../services/cartService';


class MyCart extends React.Component {
    
    carService = new CartService;
    
    state = {
        items:[],
        total:0
    }


    render() { 
        return (
        <div className="container">
                <table className="table table-striped table-condensed">
                <thead>
                    <tr>
                        <th>Qty</th>
                        <th>Product</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.items.map((a, i) =>
                            <tr key={i}>
                                <td>{ a.quantity }</td>
                                <td>{ a.product.name+ a.product.price}</td>
                                <td>{ a.totalPrice }</td>
                            </tr>
                        )
                    }
                    <td></td>
                    <td></td>
                    <td>{this.state.total}</td>
                </tbody>
            </table>
        </div>
            
          );
    }

    componentDidMount() {
        this.setState(this.carService.getCart());
    }
}

export default MyCart;