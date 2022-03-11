const books = require('./script.js');

function authorWith3DotsOnName(array) {
  const book = array.find((element) => element.author.name[1] === '.');

  return book.name;
}

console.log(authorWith3DotsOnName(books));
