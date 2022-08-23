const { Book } = require('../models');

const getAll = async () => Book.findAll();

const getByID = async (id) => {
  const result = await Book.findByPk(id);

  if (!result) return { code: 404, result: { message: 'Not found' } };

  return { code: 200, result };
}

module.exports = { getAll, getByID };
