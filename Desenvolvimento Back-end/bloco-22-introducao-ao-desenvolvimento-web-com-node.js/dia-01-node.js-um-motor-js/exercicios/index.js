const calcBMI = require('./imc');
const rs = require('readline-sync');

const weight = rs.questionFloat('What is your weight? ');
const height = rs.questionFloat('What is your height? ');

console.log(calcBMI(weight, height));
