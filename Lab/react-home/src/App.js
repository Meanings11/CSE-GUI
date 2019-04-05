import React, { Component } from 'react';
import {Nav} from './Nav';
import Body from './Body';
import CarView from './CarView';


class App extends Component {

  state ={
    purchaseMode: false
  };

  onBuy = () => {
    this.setState(prevState => ({editMode: !prevState.purchaseMode}));
  }
  render() {
    return (
      <>
      <Nav/>
      <Body/>
      {this.state.purchaseMode && <CarView/>}
      </>
      );
  }
}

export default App;
