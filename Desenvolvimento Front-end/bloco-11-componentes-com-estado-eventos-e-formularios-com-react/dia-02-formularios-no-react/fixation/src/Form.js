import React, { Component } from 'react'
import Selecao from './Selecao';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      textao: '',
      selecao: '',
      check: false,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form>
          <Selecao handleChange={this.handleChange} value={this.state.selecao} />
          <br />
          <fieldset>
            <label htmlFor='textao'>Digite aqui</label>
            <br />
            <textarea id='textao' name='textao' value={this.state.textao} onChange={this.handleChange}></textarea>
            <input type="checkbox" name='check' onChange={this.handleChange} />?
          </fieldset>
        </form>
      </div >
    )
  }
}

export default Form;