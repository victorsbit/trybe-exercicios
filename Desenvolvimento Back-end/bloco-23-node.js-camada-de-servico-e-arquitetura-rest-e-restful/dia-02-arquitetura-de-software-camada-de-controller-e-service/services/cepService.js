const { getCepModel } = require("../model/cepModel");

const REQUIRED_CEP_LENGTH = 9;
const CEP_REGEX = '^\d{5}-?\d{3}$';

const isCepValid = (cep) => {
  if (cep.length < REQUIRED_CEP_LENGTH) return false;
  // if (!cep.match(CEP_REGEX)) return false;

  return true;
}

const getCepService = (cep) => {
  const data = getCepModel(cep);

  return data;
}

module.exports = { isCepValid, getCepService };
