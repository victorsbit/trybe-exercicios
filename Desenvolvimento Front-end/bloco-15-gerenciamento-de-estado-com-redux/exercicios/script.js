const Redux = require('redux');

const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = 'teste', action) => {
  switch (state) {
    default:
      state,
  }
}

const store = Redux.createStore(reducer);
