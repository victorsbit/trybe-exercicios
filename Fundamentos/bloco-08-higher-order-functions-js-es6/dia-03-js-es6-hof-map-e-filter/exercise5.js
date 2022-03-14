const books = require('./script.js');

/* const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
]; */

function fantasyOrScienceFictionAuthors(array) {
  const authors = array.filter((element) => element.genre === 'Fantasia' || element.genre === 'Ficção Científica');

  const justAuthors = authors.map((element) => `${element.author.name}`).sort();
  return justAuthors;
}

console.log(fantasyOrScienceFictionAuthors(books));
