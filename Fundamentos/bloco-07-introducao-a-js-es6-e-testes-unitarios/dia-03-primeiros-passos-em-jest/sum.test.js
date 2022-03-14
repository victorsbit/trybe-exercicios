const sum = require('./sum');

test('expect a proper addition of two numbers', () => {
  expect(sum(4, 5)).toBe(9);
});

test('expect a proper addition of two numbers', () => {
  expect(sum(0, 0)).toBe(0);
});

// Source: https://jestjs.io/docs/expect#tothrowerror
test('expect an error due to a string passed as parameter', () => {
  expect(() => {
    sum('4', 5);
  }).toThrow();
});
