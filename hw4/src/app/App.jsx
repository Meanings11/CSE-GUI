import React, { Component } from 'react';
import Header from './Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ROUTES from '../routes'

class App extends Component {
  render() {
    return (
      <>
      

        <Router>
          <Header/>
					<Switch>
						{ ROUTES.map(x=><Route key={x.path}{...x}/>)}
					</Switch>
				</Router>
      </>
    );
  }
}

export default App;
