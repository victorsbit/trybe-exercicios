const calcBMI = require('./imc');
const rs = require('readline-sync');

const weight = rs.questionFloat('What is your weight? ');
const height = rs.questionFloat('What is your height? ');

const result = calcBMI(weight, height).toFixed(2);

switch (true) {
  case result < 18.5:
    console.log(`Your BMI of ${result} is considered underweight`);
    break;
  case result >= 18.5 && result <= 24.9:
    console.log(`Your BMI of ${result} is considered normal weight`);
    break;
  case result >= 25 && result <= 29.9:
    console.log(`Your BMI of ${result} is considered overweight`);
    break;
  case result >= 30:
    console.log('You are tremendously fat');
    break;
  default:
    console.log('dunno');
}
