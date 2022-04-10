import React, { Component } from 'react'
// import './Form.css';

class Form extends Component {
  constructor() {
    super();

    this.state = {value: 'hello'};

    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
  }

  handleTextAreaChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor='selecao'>Selecione a sua seleciocidade</label>
          <br />
          <select name='selecao' id='selecao'>
            <option value="1">selecao 1</option>
            <option value="2">selecao 2</option>
          </select>
          <br />
          <label htmlFor='textao'>Digite aqui</label>
          <br />
          <textarea id='textao' value={this.state.value} onChange={this.handleTextAreaChange}></textarea>
        </form>
      </div>
    )
  }
}

export default Form;