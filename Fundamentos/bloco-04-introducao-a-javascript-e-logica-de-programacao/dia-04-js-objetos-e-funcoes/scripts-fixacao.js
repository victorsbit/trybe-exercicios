// Objetos

let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3
  }
}

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' de idade.');

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes');

console.log('A jogadora possui ' + player.medals.golden + ' ' + 'medalhas de ouro e ' + player.medals.silver + ' medalhas de prata');

// For In

let car = ['Fiat', 'White', 500];

for (let index in car) {
  console.log(index);
}

let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (let key in names) {
  console.log('Ola ' + names[key]);
}

// ------------

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let key in car) {
  console.log(key, car[key]);
}



// For In: permite iterar os itens de um elemento e apresentá-los de acordo com o seu índice.

let car = ['Fiat', 'White', 500];

for (let index in car) {
  console.log(index);
}

// For Of: permite iterar os itens de um elemento (índices) e apresentar o seu valor

let car = ['Fiat', 'White', 500];

for (let index of car) {
  console.log(index);
}