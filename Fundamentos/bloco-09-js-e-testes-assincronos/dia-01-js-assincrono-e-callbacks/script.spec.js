// 7
const uppercase = (str) => {
  setTimeout(() => {
    console.log(str.toUpperCase());
  }, 500);
};

test('Check if all characters are uppercase', (done) => {
  try {
    const actual = uppercase('HeLlO wOrLd');
    const expected = 'HELLO WORLD';
    expect(actual).toBe(expected);
    done();
  } catch (error) {
    done(error);
  }
});