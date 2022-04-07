import './App.css';
import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super();

    this.state = {
      firstBtn: 0,
      secondBtn: 0,
      thirdBtn: 0,
    }

    this.logIt = this.logIt.bind(this);
    this.logItt = this.logItt.bind(this);
    this.logIttt = this.logIttt.bind(this);
  }

  logIt() {
    this.setState((previous, _props) => {
      return {
        firstBtn: previous.firstBtn + 1,
      }
    })
  }
  
  logItt() {
    this.setState((previous, _props) => {
      return {
        secondBtn: previous.secondBtn + 1,
      }
    })
  }
  
  logIttt() {
    this.setState((previous, _props) => {
      return {
        thirdBtn: previous.thirdBtn + 1,
      }
    })
  }

  render() {
    return (
      <main>
        <button onClick={this.logIt}>{this.state.firstBtn}</button>
        <button onClick={this.logItt}>{this.state.secondBtn}</button>
        <button onClick={this.logIttt}>{this.state.thirdBtn}</button>
      </main>
    )
  }
}

export default App;
