// 1 - 

// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato: A soma total de 1 a 50 é:

let soma = 0;

for (let index = 1; index < 51; index += 1) {
    soma += index;
}

console.log(soma);

//2 -

// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let contador = 0;

for (let index = 2; index <= 150; index += 1) {
    if (index % 3 === 0) {
        contador += 1;
    }
}

if (contador === 50) {
    console.log('mensagem secreta');
} else {
    console.log('O numero de numeros divisiveis por 3 e: ' + contador);
}


// 3 -

//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".

//4

//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

let idade = 17; // Referencia: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

let verificacao = (idade >= 18) ? 'A pessoa é maior de idade' : 'Menor de idade';
console.log(verificacao);


// 5 

//Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.