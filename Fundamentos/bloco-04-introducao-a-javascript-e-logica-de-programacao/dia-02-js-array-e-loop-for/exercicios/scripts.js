// Exercício 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// com For

// for (index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index]);
// }

// com For Of

// for (let index of numbers) {
//     console.log(index);
// }

// Exercício 2

// let soma = 0;

// for (index = 0; index < numbers.length; index += 1) {
//     soma += numbers[index];
// }

// console.log(soma);

// Exercício 3

// let total = 0;
// let media = 0;

// for (index = 0; index < numbers.length; index += 1) {
//     total += numbers[index];
//     media = total / numbers.length;
// }

// console.log(media);

// Exercício 4

// let total = 0;
// let media = 0;

// for (index = 0; index < numbers.length; index += 1) {
//     total += numbers[index];
// }

// media = total / numbers.length;

// if (media > 20) {
//     console.log('valor maior que 20');
// } else if (media < 20) {
//     console.log('valor menor que 20');
// }

// Exercício 5 | Referência: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max

let max = 0;

for (index = 0; index < numbers.length; index += 1) {
    max = Math.max(...numbers);
}

console.log(max);