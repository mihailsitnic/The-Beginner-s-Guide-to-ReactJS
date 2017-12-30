import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class NameForm extends React.Component {
  state = {error: null}
  handleSubmit = event => {
    event.preventDefault()
    const value = event.target.elements.username.value;
    const error = this.props.getErrorMessage(value);
    if (error) {
      alert(`error: ${error}`);
    } else {
      alert(`succsess: ${value}`);
    }
    console.log({target: event.target});
    console.log(event.target[0].value);
    console.log(event.target.elements.username.value);
  }

  hanleChange = (event) => {
    const {value} = event.target
    this.setState({
      error: this.props.getErrorMessage(value),
    })
  }

  render() {
    const {error} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type='text'
            name='username'
            onChange={this.hanleChange}
          />
        </label>
        {error ? <div style={{color: 'red'}}>{error}</div> : null}
        <button disabled={Boolean(error)} type='submit'>Submit</button>
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
        <NameForm
          getErrorMessage={value => {
            if (value.length < 3) {
              return `Value must be > 3 characters`
            }
            if (!value.includes('s')) {
              return `Value does not include 's'`
            }
            return null
          }}
        />
      </div>
    );
  }
}

export default App;
