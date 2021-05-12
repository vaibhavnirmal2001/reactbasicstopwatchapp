import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';

class App extends Component {
  render(){
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to React Timer App Built in React-js
          </p>

        </header>

        <Timer start={Date.now()}/>
      </div>
    );
  }
}



export default App;
