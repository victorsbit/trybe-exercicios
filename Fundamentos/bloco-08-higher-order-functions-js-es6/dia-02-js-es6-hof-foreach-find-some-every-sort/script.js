const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
// 1
function authorBornIn1947(arr) {
  let authorName = ''
  arr.find(element => {
    if (element.author.birthYear === 1947) {
      authorName = element.name;
    }
  });
  return authorName;
}

console.log(authorBornIn1947(books));

// 2
function smallerName() {
  let nameBook;
  
  const sortedArray = books.sort((a, b) => {
    return b.name.length - a.name.length;
  });

  const lastElementFromArray = sortedArray.length - 1;
  nameBook = sortedArray[lastElementFromArray].name;
  return nameBook;
}

console.log(smallerName());

// 3
function getNamedBook() {
  const book = books.find(element => element.name.length == 26);
  
  return book;
}

// console.log(getNamedBook());

// 4
function booksOrderedByReleaseYearDesc() {
  const sortedArray = books.sort((a, b) => {
    return b.releaseYear - a.releaseYear;
  });
  
  return sortedArray;
}

// console.log(booksOrderedByReleaseYearDesc());

// 5
const expectedResult = false;

function everyoneWasBornOnSecXX() {
  const result = books.every(element => element.author.birthYear >= 1901 && element.author.birthYear <= 2000);

  if (result) return result;

  return expectedResult;
}

console.log(everyoneWasBornOnSecXX());

// 6
function someBookWasReleaseOnThe80s() {
  const result = books.some(element => element.releaseYear >= 1980 && element.releaseYear <= 1990);

  return result;
}

console.log(someBookWasReleaseOnThe80s());
