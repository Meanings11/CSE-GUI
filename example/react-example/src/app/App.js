import React, { Component } from 'react';
import {Header} from './Header';
import {AccountEditor} from './AccountEditor';
import {AccountList} from './AccountList.jsx';
import {Account} from './../models/account';
import {AccountRepository} from './../api/accountRepository';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AccountLanding from './AccountLanding';

import routers from './../routers.js';


class App extends Component {

  state ={
    editMode: false,
    accounts: [
        new Account()
    ]
  };

  onToggleEditMode = () => {
    this.setState(prevState => ({editMode: !prevState.editMode}));
  }

  onNewAccount(account){
    this.accountRepository.addAccount(account)
      .then(accounts => {
          this.setState(state =>{
            state.accounts.push(account);
            state.editMode= false;
            return state;
      })
    });
  }

  render() {
    return (
      //blank tag to render all children
      <>
        <Header editMode={this.state.editMode} toggleEditMode={() => this.onToggleEditMode()}/>

        <Router>
          <Switch>
            {}
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
