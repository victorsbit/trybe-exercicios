const Redux = require('redux');

const ESTADO_INICIAL = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const NEXT = 'NEXT_COLOR';
const PREV = 'PREVIOUS_COLOR';

function nextColor() {
  return {
    type: NEXT,
  };
}

function prevColor() {
  return {
    type: PREV,
  };
}

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case NEXT:
      return {
        ...state,
        index: index += 1,
      };
    case PREV:
      return {
        ...state,
        index: index -= 1,
      }
    default:
      return state;
  }
}

const store = Redux.createStore(reducer);

console.log(store.getState());