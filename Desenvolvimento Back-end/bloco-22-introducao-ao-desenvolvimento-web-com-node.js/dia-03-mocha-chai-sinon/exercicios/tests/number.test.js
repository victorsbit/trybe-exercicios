const { expect } = require("chai");
const { checkNumber, writeFile } = require("..");
const sinon = require('sinon');
const fs = require('fs');

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

  describe('se o parametro passado nao for um numero', () => {
    it('deve retornar a string "o valor deve ser um número"', () => {
      const result = checkNumber('str');
      const expected = 'o valor deve ser um número';

      expect(result).to.be.equals(expected);
    });
  });

  describe('se o conteudo passado e escrito no arquivo', () => {
    before(() => {
      sinon.stub(fs, 'writeFileSync');
    });
  
    after(() => {
      fs.writeFileSync.restore();
    });

    it('deve retornar "ok"', () => {
      const result = writeFile('arquivo.txt', 'horny');

      expect(result).to.be.equals('ok');
    });
  });
});
