import React from 'react';
import './App.css';
import MyContext from './MyContext';
import Teste from './Teste';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      money: 10000,
    };
  }

  handleMoney = (type) => {
    switch (type) {
      case 'spend':
        this.setState((prevState) => ({ money: prevState.money - 1 }));
      break;
      case 'deposit':
        this.setState((prevState) => ({ money: prevState.money + 1 }));
      break;
      default:
        console.log('aaaaaaaaah');
    };
  }

  render() {
    const contextValue = {
      money: this.state.money,
      spendMoney: this.handleMoney,
    };

    return (
      <div className="App">
        <MyContext.Provider value={ contextValue }>
          <Teste />
        </MyContext.Provider>
      </div>
    );
  }
}

export default App;
