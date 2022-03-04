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

// Parte II
// 1

const fatorial = num => {
  for (index = num - 1; index > 1; index -= 1) {
    num *= index;
  }
  return num;
}

console.log(fatorial(4));

// 2

const findBiggestWord = (phrase) => {
  const phraseSplit = phrase.split(' ');

  phraseSplit.sort((a, b) => {
    return a.length - b.length;
  });
  const lastWord = phraseSplit.length - 1;
  return phraseSplit[lastWord];
}

console.log(findBiggestWord('shingeki no kyojin'));

// 4

const skillLit = ['HTMl', 'CSS', 'JS', 'Overwatch', 'Shingeki no Kyojin'];
const initialStr = 'Tryber x aqui!';
let putTogether = '';

const shiftX = (str) => {
  const splitStr = initialStr.split(' ');
  
  for (index = 0; index < splitStr.length; index += 1) {
    if (splitStr[index] === 'x') {
      splitStr[index] = str;
    }
    putTogether = splitStr.join(' ');
  }
  return putTogether;
}

const displayStr = () => {
  const fullStr = `${shiftX('Victor')}! Minhas cinco principais habilidades são: 
  ${skillLit[0]}
  ${skillLit[1]}
  ${skillLit[2]}
  ${skillLit[3]}
  ${skillLit[4]}`;

  console.log(fullStr);
}

displayStr();
