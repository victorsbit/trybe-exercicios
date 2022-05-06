const service = require('./service');

function randomNumber() {
  return Math.floor(Math.random() * 100);
}

// function toUpperCase(str) {
//   return str.toUpperCase();
// }

// function firstLetter(str) {
//   return str[0];
// }

// function strConcat(a, b) {
//   return `${a} ${b}`;
// }

describe('Exercises', () => {
  it('1', () => {
    const expected = 'number';
    randomNumber();
    expect(typeof randomNumber()).toBe(expected);

    randomNumber = jest.fn().mockReturnValue(10);
    randomNumber();
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber()).toBe(10);

    randomNumber.mockClear();
  });

  it('2', () => {
    randomNumber.mockImplementation((a, b) => a / b);
    randomNumber(4, 2);

    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber).toHaveBeenCalledWith(4, 2);
    expect(randomNumber(4, 2)).toBe(2)
    randomNumber.mockReset();
  });

  it('3', () => {
    randomNumber.mockImplementation((a, b, c) => a * b * c);
    randomNumber(2, 2, 2);

    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber(2, 2, 2)).toBe(8);
    randomNumber.mockClear();

    randomNumber.mockImplementation((a) => a * 2);
    randomNumber(10);

    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber(5)).toBe(10);
  })

  it('4', () => {
    jest.spyOn(service, 'toUpperCase').mockImplementation((str) => str.toLowerCase());
    jest.spyOn(service, 'firstLetter').mockImplementation((str) => str[str.length - 1]);
    jest.spyOn(service, 'strConcat').mockImplementation((a, b, c) => `${a}${b}${c}`);

    service.toUpperCase('TOLOWERCASE');
    expect(service.toUpperCase).toHaveBeenCalled();
    expect(service.toUpperCase).toHaveBeenCalledTimes(1);
    expect(service.toUpperCase('TOLOWERCASE')).toBe('tolowercase');

    service.firstLetter('Last');
    expect(service.firstLetter).toHaveBeenCalled();
    expect(service.firstLetter).toHaveBeenCalledTimes(1);
    expect(service.firstLetter('Last')).toBe('t');

    service.strConcat('a', 'b', 'c');
    expect(service.strConcat).toHaveBeenCalled();
    expect(service.strConcat).toHaveBeenCalledTimes(1);
    expect(service.strConcat('a', 'b', 'c')).toBe('abc');
    
    service.strConcat.mockRestore();
    // expect(service.strConcat).toHaveBeenCalled(); // Como a implementação original da função foi restaurada (linha 82), não é mais possível executar esse matcher
    // expect(service.strConcat).toHaveBeenCalledTimes(1); // Como a implementação original da função foi restaurada (linha 82), não é mais possível executar esse matcher
    expect(service.strConcat('a', 'b')).toBe('ab');
  })
});