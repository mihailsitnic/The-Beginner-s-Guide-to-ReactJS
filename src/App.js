import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class StopWatch extends React.Component {
  state = {lapse: 0, running: false}
  handleRunClick = () => {
    this.setState(state => {
      if(state.running) {
        clearInterval(this.timer)
      } else {
        const startTime = Date.now() - this.state.lapse
        this.timer = setInterval(() => {
          this.setState({lapse: Date.now() - startTime})
        })
      }
      return {running: !state.running}
    })
  }
  handleClearClick = () => {
    clearInterval(this.timer)
    this.setState({lapse: 0, running: false})
  }
  render() {
    const {lapse, running} = this.state
    return (
      <div>
        <label>{lapse}ms</label>
        <button onClick={this.handleRunClick}>{running ? 'Stop' : 'Start'}</button>
        <button onClick={this.handleClearClick}>Clear</button>
      </div>
    )
  }
}

const element = <StopWatch />

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
