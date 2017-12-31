import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  static allItems = [
    {id: 'a', value: 'apple'},
    {id: 'o', value: 'orange'},
    {id: 'g', value: 'grape'},
    {id: 'p', value: 'pear'},
  ]

  state = {items: []}

  addItem = () => {
    this.setState(({items}) => ({
      items: [
        ...items,
        App.allItems.find(
          i => !items.includes(i),
        ),
      ],
    }))
  }

  removeItem = item => {
    this.setState(({items}) => ({
      items: items.filter(i => i !== item),
    }))
  }

  render() {
    const {items} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button
          disabled={
            items.length >= App.allItems.length
          }
          onClick={this.addItem}
          >+</button>
          {items.map((i, index) => (
            <div key={i.id}>
              <button
                onClick={() => this.removeItem(i)}
                >-</button>
                {i.value}:
                <input />
            </div>
          ))}


        {App.allItems.map(item => (
          <div key={item.id}>{item.value}</div>
        ))}
      </div>
    );
  }
}

export default App;
