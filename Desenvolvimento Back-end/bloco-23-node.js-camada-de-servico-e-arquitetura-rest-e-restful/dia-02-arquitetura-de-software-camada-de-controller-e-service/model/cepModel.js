const connection = require('./connection');

const getCepModel = async (cep) => {
  const query = 'SELECT cep FROM cep_lookup.ceps WHERE cep = ?';

  const data = await connection.execute(query, [cep]);

  return data;
};

module.exports = { getCepModel };
