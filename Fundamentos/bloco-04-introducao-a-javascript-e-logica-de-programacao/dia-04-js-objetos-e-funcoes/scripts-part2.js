// Exercício 1 | Referència: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse and https://stackabuse.com/how-to-reverse-a-string-in-javascript/

function verificaPalindromo(palindromo) {
  
  let string = palindromo; // Determino o valor da minha string
  let splitString = string.split(''); // 'Quebro' a minha string em uma Array de diversas strings e atribuo o seu valor a variavel 'splitString'
  let reverseArray = splitString.reverse(); // Inverto a ordem dos elementos da minha Array e atribuo à variavel 'reverseArray'
  let reverseString = reverseArray.join(''); // 'Junto' a Array invertida novamente numa string e atribuo o seu valor a variavel 'reverseString'

  if (string === reverseString) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaPalindromo('banana'));

// Exercício 1 usando loop

let string = [];

function verificaPalindromo(palindromo) {
  for (let index = palindromo.length; index >= 0; index -= 1) {
    string.push(palindromo[index]);
  }

  string = string.join('');
  if (string === palindromo) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaPalindromo('banana'));