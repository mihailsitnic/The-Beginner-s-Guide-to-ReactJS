import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const props = {
  className: 'container',
  children: 'Hello, World!'
}
const element = (
  <div {...props} />
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {element}
        </p>
      </div>
    );
  }
}

export default App;
