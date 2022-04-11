import React, { Component } from 'react'

class Selecao extends Component {
  render() {
    const { handleChange, selecao } = this.props;

    return (
      <fieldset>
        <label htmlFor='selecao'>Selecione a sua seleciocidade</label>
        <br />
        <select 
          name='selecao' 
          id='selecao'
          onChange={handleChange}
        >
          <option value='default' selected hidden disabled></option>
          <option value={selecao}>selecao 1</option>
          <option value={selecao}>selecao 2</option>
        </select>
      </fieldset>
    )
  }
}

export default Selecao;