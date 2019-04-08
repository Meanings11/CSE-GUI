import React, { Component } from 'react';
import {Header} from './Header';
import {AccountEditor} from './AccountEditor';
import {AccountList} from './AccountList.jsx';
import {Account} from './../models/account';
import {AccountRepository} from './../api/accountRepository';

class App extends Component {
  accountRepository = new AccountRepository;

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

  componentDidMount(){
    this.accountRepository.getAccounts()
    .then(accounts => this.setState({accounts}));
  }

  render() {
    return (
      //blank tag to render all children
      <>
        <Header editMode={this.state.editMode} toggleEditMode={() => this.onToggleEditMode()}/>
         { this.state.editMode && <AccountEditor onNewAccount={a =>this.onNewAccount(a)} />}
         { !this.state.editMode && <AccountList accounts ={this.state.accounts}/>}
      </>
    );
  }
}

export default App;
