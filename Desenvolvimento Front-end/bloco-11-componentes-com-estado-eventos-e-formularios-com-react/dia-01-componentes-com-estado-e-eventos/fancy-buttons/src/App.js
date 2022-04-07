import './App.css';
import React, { Component } from 'react';


class App extends Component {
  logIt() {
    console.log('clicou!');
  }
  
  logItt() {
    console.log('clicou!!');
  }
  
  logIttt() {
    console.log('clicou!!!');
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
