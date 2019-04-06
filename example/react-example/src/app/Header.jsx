import React, {Component} from 'react';

export const Header = (props) =>(
    <header>
        <h1>Site Name</h1>
        <button className="float-right"
            onClick={e=> props.toggleEditMode(e)}>
        <i className="fa fa-edit"></i>        
        {props.editMode ? 'Exit Edit Mode': 'Edit Mode'}
        </button>
    </header>
);

export default Header;