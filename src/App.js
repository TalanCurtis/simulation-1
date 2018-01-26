import React, { Component } from 'react';
import './App.css';
import './Reset.css';
import Router from './Router';
import Header from './components/Header/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        {Router}
      </div>
    );
  }
}

export default App;
