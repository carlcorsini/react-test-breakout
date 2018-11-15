import React, { Component } from 'react'
import logo from './logo.svg'

class Header extends Component {
  state = {
    paragraphyDisplay: false,
    logoDisplay: false
  }

  render() {
    return (
      <div>
        <header className="App-header">
          {this.state.logoDisplay ? (
            <img src={logo} className="App-logo" alt="logo" />
          ) : (
            <div />
          )}

          {this.state.paragraphyDisplay ? (
            <p className="paragraphy">
              Edit <code>src/App.js</code> and save to reload.
            </p>
          ) : (
            <div />
          )}

          <a
            className="App-link"
            href={this.props.href}
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>

          <button
            className="clicky"
            onClick={() => {
              this.setState({
                paragraphyDisplay: !this.state.paragraphyDisplay
              })
            }}>
            Button
          </button>

          <button
            className="clicky-logo"
            onClick={() => {
              this.setState({ logoDisplay: !this.state.logoDisplay })
            }}>
            Button
          </button>
        </header>
      </div>
    )
  }
}

export default Header
