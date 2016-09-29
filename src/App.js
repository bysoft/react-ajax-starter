import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'
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
    )
  }
}

export default App
