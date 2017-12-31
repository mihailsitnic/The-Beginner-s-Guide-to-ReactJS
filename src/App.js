import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class MyFancyForm extends React.Component {
  static availableOptions = [
    'apple',
    'grape',
    'cherry',
    'orange',
    'pear',
    'peach',
  ]
  state = {multiline: '', commaSeparated: '', multiSelect: []}
  handleCommaSeparatedChange = event => {
    const {value} = event.target
    const allVals = value
      .split(',')
      .map(v => v.trim())
      .filter(Boolean)
    this.setState({
      commaSeparated: value,
      multiline: allVals
        .join('\n'),
        multiSelect: allVals.filter(v => MyFancyForm.availableOptions.includes(v),),
    })
  }
  handleMultilineChange = event => {
    const {value} = event.target
    const allVals = value
      .split('\n')
      .map(v => v.trim())
      .filter(Boolean)
    this.setState({
      multiline: value,
      commaSeparated: allVals
        .join(','),
      multiSelect: allVals.filter(v => MyFancyForm.availableOptions.includes(v),),
    })
  }
  handleMultiSelectChange = event => {
    console.log(event.target.selectedOptions);
    const allVals = Array.from(event.target.selectedOptions).map(o => o.value,)
    this.setState({
      multiSelect: allVals,
      multiline: allVals.join('\n'),
      commaSeparated: allVals.join(','),
    })
  }
  render() {
    const {commaSeparated, multiline, multiSelect} = this.state
    return (
      <form>
        <div>
          <label>
            comma separated values:
            <br />
            <input
              type='text'
              value={commaSeparated}
              onChange={
                this.handleCommaSeparatedChange
              }
            />
          </label>
        </div>
        <div>
          <label>
            multiline values:
            <br />
            <textarea
              value={multiline}
              rows={MyFancyForm.availableOptions.length}
              onChange={this.handleMultilineChange}
            />
          </label>
        </div>
        <div>
          <label>
            Multi select values:
            <br />
            <select
              multiple
              value={multiSelect}
              size={MyFancyForm.availableOptions.length}
              onChange={this.handleMultiSelectChange}
            >
            {MyFancyForm.availableOptions.map(
              optionsValue => (
                <option key={optionsValue} value={optionsValue}>
                  {optionsValue}
                </option>
              )
            )}
          </select>
          </label>
        </div>
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
        <MyFancyForm />
      </div>
    );
  }
}

export default App;
