const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
const evenNumbers = numbers.filter(element => element % 2 === 0).reduce((acc, index) => {
  console.log(`${acc} + ${index}`);
  return acc + index;
});

console.log(evenNumbers);