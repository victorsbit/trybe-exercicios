import './App.css';
import React from 'react';
import { fetchDog } from './service/service';

class App extends React.Component {
  constructor() {
    super();

    this.state= {
      dogURL: '',      
    }
  }

  async componentDidMount() {
    const { message } = await fetchDog();
    this.setState({ dogURL: message });
  }

  render() {
    const { dogURL } = this.state;

    return (
      <div>
        <h1>dog</h1>
        <img src={dogURL} alt="dog" />
      </div>
    );
  }
}

export default App;
