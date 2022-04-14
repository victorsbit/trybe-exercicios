import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      dog: '',
      imageIsLoaded: false,
    };

    this.fetchDog = this.fetchDog.bind(this);
    this.saveDog = this.saveDog.bind(this);
    this.handleBtn = this.handleBtn.bind(this);
  }

  async componentDidMount() {
    // get the dog obj in order to pass as parameter for the 'saveDog' function
    const dogObj = await this.fetchDog();
    const { message: dogUrl } = dogObj;

    this.saveDog(dogUrl);
  }

  componentDidUpdate() {
    const { dog } = this.state;
    localStorage.setItem('url', dog);

    const splited = dog.split('/');
    alert(`A raça do cachorro é: ${splited[4]}`);
  }

  async handleBtn() {
    const dogObj = await this.fetchDog();
    const { message: dogUrl } = dogObj;
    this.setState({ dog: dogUrl });
  }

  // save the dogUrl passed as parameter by componentDidMount in the state
  saveDog(dogUrl) {
    this.setState({
      dog: dogUrl,
      imageIsLoaded: true,
    });
  }

  // responsible for fetching the API and return its obj
  fetchDog() {
    const url = ('https://dog.ceo/api/breeds/image/random');
    const promise = fetch(url)
      .then((response) => response.json())
      .then((data) => data);

    return promise;
  }

  render() {
    const { dog, imageIsLoaded } = this.state;

    return (
      <div>
        {imageIsLoaded ? <img src={ dog } alt="lint-sucks" /> : 'Loading...'}
        <button type="button" onClick={ this.handleBtn }>Click me!</button>
      </div>
    );
  }
}

export default App;
