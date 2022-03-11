const books = require('./script.js');

// Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

function formatedBookNames(array) {
  const newArray = array.map(element => `${element.name} - ${element.genre} - ${element.author.name}`);

  return newArray;
}

console.log(formatedBookNames(books));
