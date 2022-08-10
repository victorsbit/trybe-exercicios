const connection = require('./connection');

const isUserValid = ({ firstName, lastName, email }) => {
  if (!firstName || !lastName || !email) return false;

  return true;
};

const isPasswordValid = (password) => {
  if (!password || password.length < 6) return false;

  return true;
};

const getAll = async () => {
  const [users] = await connection.execute('SELECT * FROM users');

  return users;
};

const create = async ({ firstName, lastName, email, password }) => {
  if (!isUserValid({ firstName, lastName, email })) return false;
  if (!isPasswordValid(password)) return false;

  const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)';

  const [result] = await connection.execute(query, [firstName, lastName, email, password]);
  const { id } = result;
  return { id, firstName, lastName, email };
};

const getUserById = async (id) => {
  const query = 'SELECT * FROM users WHERE id = ?';
  const [user] = await connection.execute(query, [id]);

  if (user.length === 0) return false;

  return user;
};

module.exports = { getAll, create, getUserById };
