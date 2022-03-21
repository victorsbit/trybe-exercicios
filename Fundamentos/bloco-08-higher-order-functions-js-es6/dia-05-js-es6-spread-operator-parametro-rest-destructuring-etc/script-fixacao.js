// spread operator

const specialFruit = ['Jaca', 'Manga', 'Banana'];

const additionalItens = ["M&M's", 'Chocolate', 'Sorvete'];

const fruitSalad = (fruit, additional) => {
  const salad = [...fruit, ...additional];

  return salad;
};

// console.log(fruitSalad(specialFruit, additionalItens));

// obj destructuring
// 1
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const candidate = {
  ...user,
  ...jobInfos,
}

// 2
function greetCandidate({ name, age, nationality, profession, squad }) {
  return `Hi, my name is ${name}, I'm ${age}yo and I'm ${nationality}. I work as a ${profession} and my squad is ${squad}.`;
}

// console.log(greetCandidate(candidate));

// Array destructuring
// 1
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

const [greet] = saudacoes;

// saudacoes[1](greeting);

// 2
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// console.log(comida, animal, bebida);

[comida, animal, bebida] = [bebida, comida, animal];
// console.log(comida, animal, bebida);

// Default Destructuring
const getNationality = ({ firstName, nationality  = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));

// obj property shorthand
const getPosition = (latitude, longitude) => ({
  latitude,
  longitude});

// console.log(getPosition(-19.8157, -43.9542));

// default parameters
const multiply = (number, value = 1) => {
  return number * value;
};

console.log(multiply(8, 2));
