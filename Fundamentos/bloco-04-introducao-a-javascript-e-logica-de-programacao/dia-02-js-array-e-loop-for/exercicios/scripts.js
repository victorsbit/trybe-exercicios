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

let soma = 0;

for (index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}

console.log(soma);