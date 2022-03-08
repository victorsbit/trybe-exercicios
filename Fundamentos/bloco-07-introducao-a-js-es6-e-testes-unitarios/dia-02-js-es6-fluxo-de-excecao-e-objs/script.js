/* 
const isValid = (num1, num2) => {
  
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    throw new Error('almalmal');
  }

}

const sum = (num1, num2) => {

  try {
    isValid(num1, num2);
    return num1 + num2;
  } catch (error) {
    throw error.message;
  }

}

console.log(sum(2, '5'));
*/
/* 
const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const students = () => {

  console.log('Estudante 1');
  for (const i in student1) {
    const str = `${i}, Nivel: ${student1[i]}`;
    console.log(str);
  }

  console.log('Estudante 2');
  for (const i in student2) {
    const str = `${i}, Nivel: ${student2[i]}`;
    console.log(str);
  }

}

students();
 */
/*
 const objKeys = (student) => {

  const skillsArray = Object.keys(student);
  for (const i in skillsArray) {
    const fullStr = `Habilidade: ${skillsArray[i]}, Nivel: ${student[skillsArray[i]]}`;
    console.log(fullStr);
  }

}

console.log('Estudante 1');
objKeys(student1); 
*/
/* 
const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const listSkillsValuesWithFor = (student) => {
  const skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};

const listSkillsValuesWithValues = (student) => Object.values(student);

// Sem Object.values
console.log(listSkillsValuesWithFor(student));

console.log('Com object.values');
console.log(listSkillsValuesWithValues(student));
*/

const getDayName = (number) => {
  const dayNumber = number - 1;
  const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

  if (dayNumber < 0 || dayNumber > 6) {
    throw new Error('Dia invalido');
  }
  return days[dayNumber];

};

const printDayname = (dayNumber) => {
  try {
    console.log(getDayName(dayNumber));
  } catch (error) {
    console.log(error.message);
  }
};

printDayname(8);
