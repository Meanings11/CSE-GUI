import React, {Component} from 'react';
import {Department} from '../models/department';
import {Account} from './../models/account';


export class AccountEditor extends React.Component{
    departments = [
        new Department(1,"HR"),
        new Department(2,"Marketing"),
        new Department(3,"Accouting"),
        new Department(4,"IT"),
    ];
    state = {
        name: '',
        email: '',
        isEmployer: false,
        departmentId: 0
    };

    onSubmit(){
        this.props.onNewAccount(new Account(undefined,this.state.name, this.state.email,this.state.isEmployer,this.state.departmentId))
        
    };

    render(){
        return (
            <form onSubmit={e => this.onSubmit()} >
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" 
                    id="name" 
                    name="name"
                    className="form-control"
                    value={this.state.name} //set name first two way binding
                    onChange={e => this.setState({name: e.target.value})}/> 
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" 
                    id="email" 
                    name="email"
                    className="form-control"
                    value={this.state.email} //set name first two way binding
                    onChange={e => this.setState({email: e.target.value})}/> 
                </div>

                <div className="form-group">
                    <label htmlFor="isEmployer">
                    <input type="checkbox" 
                    id="isEmployer" 
                    name="isEmployer"
                    value={this.state.isEmployer} //set name first two way binding
                    onChange={e => this.setState({isEmployer: e.target.checked})}/> 
                    isEmployer
                    </label>
                </div>


                <div className="form-group">
                    <label htmlFor="email">Department</label>
                    <select id="departmentId" 
                    name="departmentId"
                    className="form-control"
                    value={this.state.departmentId} //set name first two way binding
                    onChange={e => this.setState({departmentId: e.target.value})}> 
                    
                    <option></option>
                    {
                        this.departments.map(d => <option key = {d.id} value={d.id}>{d.name}</option>)
                    }
                    </select>
                </div>
            
            <div>
                <button className="btn btn-primary"
                        onClick= {e=>this.onSubmit()}
                    >
                    Save
                </button>
            </div>
            </form>
        );
    }
}

export default AccountEditor;