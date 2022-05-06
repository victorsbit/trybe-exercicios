function randomNumber() {
  return Math.floor(Math.random() * 100);
}

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
});