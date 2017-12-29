import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Box({
  style,
  size,
  className = '',
  ...rest
}) {
  const sizeClassName = size ? `box-${size}` : '';
  return(
    <div
      className={`box ${className} ${sizeClassName}`}
      style={{padding: 20, ...style}}
      {...rest}
    />
  )
}

const element = (
  <div>
    <Box
      size='small'
      style={{backgroundColor: 'lightblue'}}>Small Box</Box>
    <Box
      size='medium'
      style={{backgroundColor: 'pink'}}>Medium Box</Box>
    <Box
      size='large'
      style={{backgroundColor: 'orange'}}>Large Box</Box>
  </div>
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
