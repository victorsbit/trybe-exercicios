// Exercicio 1

/* for (let index = 10; index > 0; index -= 1) {
    console.log(index);
} */


// Exercicio 2

let word = 'tryber';
let wordReverse = '';

for (let index = word.length - 1; index >= 0; index -= 1) {
    // let wordReverse = word.split('').reverse().join('');
    wordReverse += word[index];
}

console.log(wordReverse);