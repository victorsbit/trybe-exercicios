// 1

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acc, curr) => {
    return acc.concat(curr);
  }, []);
}

// console.log(flatten());

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

// 2
function reduceNames() {
  return books.reduce((acc, curr) => {
    return acc.concat(' ', curr.author.name);
  }, '');
}

// console.log(reduceNames());

// 3
function averageAge() {
  const allAges = books.length;
  const authorAge = books.map(element => element.releaseYear - element.author.birthYear);

  const average = authorAge.reduce((acc, curr) => acc + curr) / allAges;

  return average;
}

// console.log(averageAge());

// 4
function longestNamedBook() {
  return books.reduce((acc, curr) => {
    if (acc.name.length > curr.name.length) return acc;

    return curr;
  });
}

// console.log(longestNamedBook());

// 5
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const fullStr = names.reduce((acc, curr) => acc.concat(curr));
  let number = 0;

  for (let i of fullStr) {
    if (i.toLowerCase() === 'a') {
      number += 1;
    }
  }

  return number;
}

// console.log(containsA());

// 6
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  const expected = students.map((element, index) => {
    const allScores = grades[index].length;
    const average = grades[index].reduce((acc, curr) => acc + curr) / allScores;
    
    return {
      name: element, average,
    }
  });
  return expected;
}

// console.log(studentAverage());
