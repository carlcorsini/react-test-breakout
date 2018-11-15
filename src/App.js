import React, { Component } from 'react'
import Header from './Header'

import './App.css'

class App extends Component {
  render() {
    return (
      <div data-test="App" className="App">
        <Header href="https://reactjs.org" />
      </div>
    )
  }
}

export default App
