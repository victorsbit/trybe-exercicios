const { isCepValid, getCepService } = require("../services/cepService");

const BAD_REQUEST = { "error": { "code": "invalidData", "message": "CEP inválido" } };

const testResponse = (_req, res) => res.status(200).json({ message: "pong!" });

const getCep = async (req, res) => {
  const { cep } = req.params;

  if (!isCepValid(cep)) return res.status(400).json(BAD_REQUEST);

  return res.status(200).json(await getCepService(cep));
}

module.exports = { testResponse, getCep };
