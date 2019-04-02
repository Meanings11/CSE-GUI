import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './Header.jsx';
import {Editor} from './Editor.jsx';

class App extends Component {
  state ={
    editMode: false,
    items: [
      {id: 1, name: 'Foo'},
      {id: 2, name: 'Bar'},
      {id: 3, name: 'Baz'}
    ]
  };

  onToggleEditMode = () => {
    this.setState(prevState => ({editMode: !prevState.editMode}));
  }

  render() {
    return (
      //blank tag to render all children
      <>
        <Header editMode={this.state.editMode} toggleEditMode={() => this.onToggleEditMode()}/>
         <ul>
           {this.state.items.map((item, index)=>(<li key={index}>{item.name}</li>))}
         </ul>
         { this.state.editMode && <Editor />}
      </>
    );
  }
}

export default App;
