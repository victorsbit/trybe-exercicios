// 1

function testingScope(escopo) {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(false);

// 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

/* Source: https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly */

oddsAndEvens.sort((a, b) => a - b);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

const fatorial = num => {
  for (index = num - 1; index > 1; index -= 1) {
    num *= index;
  }
  return num;
}

console.log(fatorial(4));
