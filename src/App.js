import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class NameForm extends React.Component {
  handleSubmit = event => {
    event.preventDefault()
    console.log({target: event.target});
    console.log(event.target[0].value);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          name:
          <input type='text' />
        </label>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <NameForm />
      </div>
    );
  }
}

export default App;
