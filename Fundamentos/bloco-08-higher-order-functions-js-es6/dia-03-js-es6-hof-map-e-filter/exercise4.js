const books = require('./script.js');

function oldBooksOrdered(array) {
  const currentYear = 2022;

  const oldBooks = array.filter((element) => {
    const bookAge = currentYear - element.releaseYear;

    if (bookAge >= 60) return element;
  });

  const oldBooksSorted = oldBooks.sort((a, b) => a.releaseYear - b.releaseYear);
  return oldBooksSorted;
}

console.log(oldBooksOrdered(books));
