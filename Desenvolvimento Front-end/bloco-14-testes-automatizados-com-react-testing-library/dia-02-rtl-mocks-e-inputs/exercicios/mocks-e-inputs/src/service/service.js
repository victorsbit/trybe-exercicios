function toUpperCase(str) {
  return str.toUpperCase();
}

function firstLetter(str) {
  return str[0];
}

function strConcat(a, b) {
  return `${a}${b}`;
}

const fetchDog = () => {
  const API_URL = 'https://dog.ceo/api/breeds/image/random';
  const promise = fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data);

  return promise;
}

module.exports = { toUpperCase, firstLetter, strConcat, fetchDog };
