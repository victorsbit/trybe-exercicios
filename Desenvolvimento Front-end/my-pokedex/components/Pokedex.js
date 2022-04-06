import './Pokedex.css';
import React, { Component } from 'react';
import Pokemon from './Pokemon';
import data from '../data';

class Pokedex extends Component {
  render() {
    return (
      <div className='container'>
        {data.map((element) => <Pokemon pokemon={element} />)}
      </div>
    );
  }
}

export default Pokedex;