import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  state = {count: 0}
  handleClick = () => {
    this.setState(({count}) => ({
      count: count + 1,
    }))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.handleClick}>
          {this.state.count}
        </button>
      </div>
    );
  }
}

export default App;
