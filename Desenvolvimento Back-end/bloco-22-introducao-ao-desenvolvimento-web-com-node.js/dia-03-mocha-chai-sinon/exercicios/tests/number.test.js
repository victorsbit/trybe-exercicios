const { expect } = require("chai");

describe('testa a funcao', () => {
  describe('se o numero for menor que 0', () => {
    it('deve retornar a string "negativo"', () => {
      const result = checkNumber();
      const expected = 'negativo';

      expect(result).to.be.equals(expected);
    });
  });

  describe('se o numero for igual a 0', () => {
    it('deve retornar a string "neutro"', () => {
      const result = checkNumber();
      const expected = 'neutro';

      expect(result).to.be.equals(expected);
    });
  });

  describe('se o numero for maior que 0', () => {
    it('deve retornar a string "positivo"', () => {
      const result = checkNumber();
      const expected = 'positivo';

      expect(result).to.be.equals(expected);
    });
  });
});
