import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './Header.jsx';
import {Editor} from './Editor.jsx';

class App extends Component {
  state ={
    editMode: false
  };

  onToggleEditMode = () => {
    this.setState(prevState => ({editMode: !prevState.editMode}));
  }

  render() {
    return (
      //blank tag to render all children
      <>
        <Header toggleEditnode={()=> this.onToggleEditMode()}/>
        {
         (this.state.editMode)&& <Editor/>
         <ul>
           {this.state.items.map((item,index))=>(<li key={index}>{item.name}</li>))}
         </ul>
        }
      </>
    );
  }
}

export default App;
