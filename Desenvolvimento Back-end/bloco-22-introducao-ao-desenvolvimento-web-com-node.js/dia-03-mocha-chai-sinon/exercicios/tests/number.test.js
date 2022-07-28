const { expect } = require("chai");
const checkNumber = require("..");

describe('testa a funcao', () => {
  describe('se o numero for menor que 0', () => {
    it('deve retornar a string "negativo"', () => {
      const result = checkNumber(-1);
      const expected = 'negativo';

      expect(result).to.be.equals(expected);
    });
  });

  describe('se o numero for igual a 0', () => {
    it('deve retornar a string "neutro"', () => {
      const result = checkNumber(0);
      const expected = 'neutro';

      expect(result).to.be.equals(expected);
    });
  });

  describe('se o numero for maior que 0', () => {
    it('deve retornar a string "positivo"', () => {
      const result = checkNumber(1);
      const expected = 'positivo';

      expect(result).to.be.equals(expected);
    });
  });
});
