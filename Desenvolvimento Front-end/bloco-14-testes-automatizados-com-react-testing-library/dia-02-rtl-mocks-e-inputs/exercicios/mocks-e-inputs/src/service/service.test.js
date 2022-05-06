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
  });

  it('2', () => {
    const mockFunction = randomNumber.mockImplementation((a, b) => a / b);
    mockFunction(4, 2);

    expect(mockFunction).toHaveBeenCalled();
    expect(mockFunction).toHaveBeenCalledWith(4, 2);
    expect(mockFunction(4, 2)).toBe(2);
  });
});