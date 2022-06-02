import React from 'react';
import MyContext from './MyContext';

class Teste extends React.Component {
render() {
    return (
      <div>
        <MyContext.Consumer>
          {(value) => (
            <div>
              <span>{ value.money }</span>
              <br />
              <button onClick={ () => value.spendMoney('spend') }>Gastar</button>
              <br />
              <button onClick={ () => value.spendMoney('deposit') }>Depositar</button>
            </div>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

export default Teste;
