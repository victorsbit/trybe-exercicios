import React, { Component } from 'react'
// import './Form.css';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      textao: 'hello',
      selecao: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor='selecao'>Selecione a sua seleciocidade</label>
          <br />
          <select name='selecao' id='selecao' onChange={this.handleChange}>
            <option value='default' selected hidden disabled></option>
            <option value="selecao 1">selecao 1</option>
            <option value="selecao 2">selecao 2</option>
          </select>
          <br />
          <label htmlFor='textao'>Digite aqui</label>
          <br />
          <textarea id='textao' name='textao' value={this.state.textao} onChange={this.handleChange}></textarea>
        </form>
      </div >
    )
  }
}

export default Form;