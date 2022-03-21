const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo
function toObj(array) {
  let model, manufacturer, releaseYear;
  [model, manufacturer, releaseYear] = [...array];

  return {
    model,
    manufacturer,
    releaseYear,
  }
}

console.log(toObj(palio));
