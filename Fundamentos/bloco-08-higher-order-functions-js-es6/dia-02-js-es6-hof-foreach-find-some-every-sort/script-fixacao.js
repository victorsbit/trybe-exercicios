const students = [
  { name: 'Maria', grade: 70, approved: '' },
  { name: 'José', grade: 56, approved: '' },
  { name: 'Roberto', grade: 90, approved: '' },
  { name: 'Ana', grade: 81, approved: '' },
];

function verifyGrades() {
  students.forEach((student) => {
    if (student.grade >= 60) {
      student.approved = 'Aprovado';
    } else {
      student.approved = 'Recuperação';
    }
  });
}

verifyGrades();

console.log(students);
// [
//   { name: 'Maria', grade: 70, approved: 'Aprovado' },
//   { name: 'José', grade: 56, approved: 'Recuperação' },
//   { name: 'Roberto', grade: 90, approved: 'Aprovado' },
//   { name: 'Ana', grade: 81, approved: 'Aprovado' }
// ]

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};

// Adicione seu código aqui

emailListInData.forEach(showEmailList);

// .find
// 1
const numbers = [19, 21, 31, 3, 44, 22, 14];

const findDivisibleBy3And5 = (arr) => {
  const findNumber = arr.find(element => element % 5 === 0 && element % 3 === 0);

  if (findNumber) return findNumber;
  return false;
}

console.log(findDivisibleBy3And5(numbers));

// 2
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (arr) => {
  const findWord = arr.find(element => element.length === 5);

  if (findWord) return findWord;
  return false;
}

console.log(findNameWithFiveLetters(names));

// 3
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(arr, id) {
  const idMatch = arr.find(element => element.id == id);

  if (idMatch) return idMatch;
  return false;
}

console.log(findMusic(musicas, '31031686'));

// .some
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  const hasIt = arr.some(element => element == name);

  return hasIt;
}

console.log(hasName(names, 'Tracer'));

// .every
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  const checkAge = arr.every(element => element.age >= minimumAge);

  if (checkAge) return checkAge;
  return checkAge;
}

console.log(verifyAges(people, 16));

// .sort
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Adicione se código aqui
const sorted = people.sort((a, b) => {
  return b.age - a.age;
});

console.log(sorted);