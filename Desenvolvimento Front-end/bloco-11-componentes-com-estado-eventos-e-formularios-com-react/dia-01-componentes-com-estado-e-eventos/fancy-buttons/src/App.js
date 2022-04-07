import './App.css';
import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super();

    this.logIt = this.logIt.bind(this);
    this.logItt = this.logItt.bind(this);
    this.logIttt = this.logIttt.bind(this);
  }

  logIt() {
    console.log('clicou!');
    console.log(this);
  }
  
  logItt() {
    console.log('clicou!!');
    console.log(this);
  }
  
  logIttt() {
    console.log('clicou!!!');
    console.log(this);
  }

  render() {
    return (
      <main>
        <button onClick={this.logIt}>Click!</button>
        <button onClick={this.logItt}>Click!!</button>
        <button onClick={this.logIttt}>Click!!!</button>
      </main>
    )
  }
}

export default App;
