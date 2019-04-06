import React, { Component } from 'react';
import ProductDetail from './ProductDetail';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

class App extends Component {
  render() {
    return (
      <>
        <ProductDetail/>
        <ReviewList/>
        <ReviewForm/>
      </>
    );
  }
}

export default App;
