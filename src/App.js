import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tilt from 'react-tilt';



const element = (
  <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
   <h1 className="Tilt-inner">Hello, React!</h1>
  </Tilt>
)


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {element}
      </div>
    );
  }
}

export default App;
