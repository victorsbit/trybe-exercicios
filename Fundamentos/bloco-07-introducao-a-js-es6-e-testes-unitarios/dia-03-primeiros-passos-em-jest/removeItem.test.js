function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

module.exports = myRemove;
// implemente seus testes aqui
const removeItem = require('./removeItem.test.js');

test('Expect an array with the numbers: 1, 2 and 4', () => {
  expect(removeItem([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
});

test('Expect an array with the numbers: 1, 2 and 4', () => {
  expect(removeItem([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
});

test('Expect an array with numbers 1 to 4', () => {
  expect(removeItem([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
});
