import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


class UserCompany extends Component {
  state = {company: undefined}

  componentDidMount() {
    axios({
      url: 'https://api.github.com/graphql',
      method: 'post',
      data: {
        query: `{
          user(login: "${this.props.username}") {
            company
          }
        }`,
      },
      headers: {Authorization: `bearer 7b3d27ad5a0e9f2ad225837d2c5746993856716a`},
    }).then(response => {
      this.setState({
        company: response.data.data.user.company,
      })
    })
  }

  render() {
    return this.state.company || 'Unknow'
  }
}

const username = 'mihailsitnic'
const element = (
  <div>
    <div>
      {`@${username} works at `}
      <UserCompany username={username} />
    </div>
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
