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
  console.log(random);
  return callback(number, random);
}

const checkNumber = (bet, randomNumber) => {
  if (bet === randomNumber) {
    return 'Parabains!';
  }
  return 'Burro!';
}

console.log(lottery(2, checkNumber));
