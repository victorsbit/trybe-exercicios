const books = require('./script.js');

function oldBooks(array) {
  const currentYear = 2022;

  const oldBooks = array.filter((element) => {
    const bookAge = currentYear - element.releaseYear;

    if (bookAge >= 60) return true;
  });

  const oldBooksNames = oldBooks.map((element) => element.name);
  return oldBooksNames;
}

console.log(oldBooks(books));
