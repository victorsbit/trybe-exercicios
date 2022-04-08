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

  logIt(event) {
    this.setState((previous, _props) => {
      const obj = { key: previous.firstBtn + 1}
      const element = event.target;

      if (obj.key % 2 === 0) {
        element.className = 'green-btn';
        console.log('Green');
      } else {
        element.className = '';
        console.log('Default');
      }

      return {
        firstBtn: obj.key,
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
