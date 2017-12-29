import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


function SayHello(props) {
  return (
    <div>
      Hello {props.firstName} {props.lastName}!
    </div>
  )
}

const propTypes = {
  string(props, propName, componentName) {
    if (typeof props[propName] !== 'string') {
      return new Error(
        `typeof props[propName] !== 'string'`
      )
    }
  }
}

SayHello.propTypes = {
  firstName: propTypes.string,
  lastName: propTypes.string,
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <SayHello firstName={true} />
      </div>
    );
  }
}

export default App;
