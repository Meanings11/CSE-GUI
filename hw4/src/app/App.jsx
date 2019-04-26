import React, { Component } from 'react';
import Header from './Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ROUTES from '../routes'
class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <ProductList/>
      </>
    );
  }
}

export default App;
