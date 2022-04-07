import './App.css';
import React, { Component } from 'react';

function logIt() {
  console.log('clicou!');
}

function logItt() {
  console.log('clicou!!');
}

function logIttt() {
  console.log('clicou!!!');
}

class App extends Component {
  render() {
    return (
      <main>
        <button onClick={logIt}>Click!</button>
        <button onClick={logItt}>Click!!</button>
        <button onClick={logIttt}>Click!!!</button>
      </main>
    )
  }
}

export default App;
