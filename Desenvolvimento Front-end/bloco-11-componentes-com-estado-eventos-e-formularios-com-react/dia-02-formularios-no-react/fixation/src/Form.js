import React, { Component } from 'react'
// import './Form.css';

class Form extends Component {
  constructor() {
    super();

<<<<<<< HEAD
    this.state = { 
      textao: 'hello',
      selecao: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({ 
      [name]: value,
    });
=======
    this.state = {value: 'hello'};

    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
  }

  handleTextAreaChange(event) {
    this.setState({ value: event.target.value });
>>>>>>> f4df48f6e62907bb33768e612d66180c6060587e
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor='selecao'>Selecione a sua seleciocidade</label>
          <br />
<<<<<<< HEAD
          <select name='selecao' id='selecao' value={this.state.selecao} onChange={this.handleChange}>
            <option value="" selected disabled hidden>escolha aqui</option>
            <option value="selecao 1">selecao 1</option>
            <option value="selecao 2">selecao 2</option>
=======
          <select name='selecao' id='selecao'>
            <option value="1">selecao 1</option>
            <option value="2">selecao 2</option>
>>>>>>> f4df48f6e62907bb33768e612d66180c6060587e
          </select>
          <br />
          <label htmlFor='textao'>Digite aqui</label>
          <br />
<<<<<<< HEAD
          <textarea id='textao' name='textao' value={this.state.textao} onChange={this.handleChange}></textarea>
=======
          <textarea id='textao' value={this.state.value} onChange={this.handleTextAreaChange}></textarea>
>>>>>>> f4df48f6e62907bb33768e612d66180c6060587e
        </form>
      </div>
    )
  }
}

export default Form;