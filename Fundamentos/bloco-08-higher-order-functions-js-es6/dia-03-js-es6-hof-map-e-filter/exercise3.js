const books = require('./script.js');

function fantasyOrScienceFiction(array) {
  const result = array.filter((element) => element.genre === 'Fantasia' || element.genre === 'Ficção Científica');

  return result;
}

console.log(fantasyOrScienceFiction(books));
