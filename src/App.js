import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import json from './properties.json'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      results: []
    };
  }

  componentDidMount() {
    this.setState({ results: json.results })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

      <ul>
          {this.state.results.map(result =>
              <li key={result.id}>
                  <div>
                      <h1>{ result.title }</h1>
                      <p>{ result.description }</p>
                  </div>
              </li>
          )}
      </ul>
      </div>
    );
  }
}

export default App;
