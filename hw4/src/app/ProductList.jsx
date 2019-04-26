import React from 'react';
import {Product} from './../models/Product';
import {ProductRepository} from './../api/ProductRepository';

export class ProductList extends React.Component {
    
    productRepository = new ProductRepository();

    state = {
        products:[]
    }

    render(){
        return(
        <div className="container">

                <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item">Tasty snacks</li>
                        </ol>
                </nav>
		<div className="row">
			{
				this.state.products.map((p, i) =>
				<div className="col-sm-6 col-md-6 col-lg-4 mt-4 d-flex align-items-stretch">
					<div className="card">
                        <div className="p-2">
						    <img className="card-img-top" alt={'p.id Responsive Image'} src={'http://johnlawrimore.com/smu/'+ p.imageName} />
                            <float className="badge badge-success float-right">${p.price}</float>
                        </div>

                    	<div className="card-block p-2">
							<h4 className="card-title">{p.name}</h4>
							<div className="card-text">
                                    <button className="btn btn-info btn-lg btn-block">
                                        Product Details
                                    </button>

                                    <button className="btn btn-warning btn-lg btn-block mt-1">
                                        Add to Cart
                                    </button>
							</div>
						</div>
					</div>
				</div>
                )
		}
	    </div>
    </div>
    )
}

    componentDidMount(){
        this.productRepository.getProducts()
        .then(products => {
            let product = products.map(p => new Product(p.id, p.name, p.description, p.price, p.imageName, p.reviews));
            this.setState({products: product});
        });
    }
    
};

export default ProductList;