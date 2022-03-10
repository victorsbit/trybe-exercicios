// 1

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};

function createEmployee(nome) {
  const email = nome.toLowerCase().replace(' ', '_'); // Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  return {
    nome,
    email: `${email}@trybe.com`,
  }
}

console.log(newEmployees(createEmployee));

// 2

const lottery = (number, callback) => {
  const random = Math.round(Math.random() * 5);
  return callback(number, random);
}

const checkNumber = (bet, randomNumber) => {
  if (bet === randomNumber) {
    return 'Parabains!';
  }
  return 'Burro!';
}

console.log(lottery(2, checkNumber));

// 3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const validator = (a, b, callback) => {
  return callback(a, b);
}

const checkAnswers = (a, b) => {
  let points = 0;

  for (let index = 0; index < a.length; index += 1) {
    if (a[index] === b[index]) {
      points += 1;
    } else {
      points -= 0.5;
    }
  }
  return points;
}

console.log(validator(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));
