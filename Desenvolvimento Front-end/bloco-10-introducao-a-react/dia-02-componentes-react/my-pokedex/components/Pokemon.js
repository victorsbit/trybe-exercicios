import React, { Component } from 'react';
import './Pokemon.css';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight: { value, measurementUnit }, image } = this.props.pokemon;

    return (
      <section className='pokemon-card'>
        <div>
          <span>{name}</span>
          <span>{type}</span>
          <span>{value} {measurementUnit}</span>
        </div>
        <img src={image} className='pokemon-img' alt=''></img>
      </section>
    );
  }
}

export default Pokemon;