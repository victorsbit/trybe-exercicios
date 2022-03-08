function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
test('expect the function to return the string "fizzbuzz"', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
  console.log(myFizzBuzz(15));
});

test('expect the function to return the string "fizz"', () => {
  expect(myFizzBuzz(3)).toBe('fizz');
  console.log(myFizzBuzz(3));
});

test('expect the function to return the string "buzz"', () => {
  expect(myFizzBuzz(5)).toBe('buzz');
  console.log(myFizzBuzz(5));
});

test('expect the function to return the its parameter', () => {
  const testNum = 8; // can't be fully divided by neither 3 nor 5
  expect(myFizzBuzz(testNum)).toBe(testNum);
  console.log(myFizzBuzz(testNum));
});

test('expect the function to return false', () => {
  expect(myFizzBuzz('a string')).toBe(false);
  console.log(myFizzBuzz('a string'));
});