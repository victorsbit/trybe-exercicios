const sum = require('./sum');

test('expect a proper addition of two numbers', () => {
  expect(sum(5, 5)).toBe(10);
});