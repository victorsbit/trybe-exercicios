const { Book } = require('../models');

const getAll = async () => Book.findAll();

module.exports = { getAll };