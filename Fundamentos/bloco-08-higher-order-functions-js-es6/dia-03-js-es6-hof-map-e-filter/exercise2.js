const books = require('./script.js');

// Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

function nameAndAge(array) {
  const result = array.map(element => {
    const age = element.releaseYear - element.author.birthYear;
    
    return { age, author: element.author.name };
  });
  
  const sortedResult = result.sort((a, b) => a.age - b.age);
  return sortedResult;
}

console.log(nameAndAge(books));
