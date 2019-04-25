import React from 'react';
import {AccountList} from './AccountList';
import { AccountRepository} from "../api";
import {Link} from "react-router-dom";

class AccountLanding extends React.Component {
    accountRepository = new AccountRepository;

    state = {
        accounts:[]
    };

    onDelete(accountId){
        if(window.confirm("Are you sure")){
            this.accountRepository.deleteAccount(accountId)
                .then(() => {
                    this.setState(state => ({
                        accounts: state.accounts.filter(x => x.id !== accountId)
                    }))
                });
        }
        
    }

    render(){
        return(
        <>
            <Link to="/new" className="btn btn-success float-right">
                <i className="fa fa-edit"></i>        
                New Account
            </Link>
        {!!this.state.accounts.length && 
        <AccountList accounts={this.state.accounts} onDelete={x => this.onDelete(x)}/>}
        </>
        )
    }

    componentDidMount(){
        this.accountRepository.getAccounts()
        .then(accounts => this.setState({accounts}))
    }

    


}

export default AccountLanding;