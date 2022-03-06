// 3

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function assignTurn(obj, key, value) {
  // Source: https://stackoverflow.com/questions/59992678/passing-object-key-name-in-function-parameter
  Object.assign(obj, { [key]: value });
  // console.log(obj);
}

assignTurn(lesson2, 'turno', 'noite');
/* 
function listKeys(obj) {
  const allKeys = Object.keys(obj);
  return console.log(allKeys);
}

listKeys(lesson2);

function listObjLength(obj) {
  const allKeys = Object.keys(obj).length;
  return console.log(`Esse objeto possui um total de ${allKeys} chaves.`);
}

listObjLength(lesson2);

function listValue(obj) {
  const allValues = Object.values(obj);
  return console.log(`Valores: ${allValues}`);
}

listValue(lesson3);
 */

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

function allStudents() {
  let total = 0;

  for (let index in allLessons) {
    total += Object.values(allLessons[index])[1];
  }

  return console.log(total);
}

allStudents();

function getValueByNumber(obj, p) {
  const getValue = Object.values(obj)[p];
  
  return console.log(getValue);
}

getValueByNumber(lesson1, 2);

function verifyPair(obj, key, value) {
  const pairArray = Object.entries(obj);
  let doesItExist = false;
  
  for (let index of pairArray) {
    if (index[0] === key && index[1] === value) {
      doesItExist = true;
    }
  }
  return console.log(doesItExist);
}

verifyPair(lesson2, 'professor', 'Carlos');
