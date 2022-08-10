const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute('SELECT * FROM model_example.books');

  return books;
}

const getByAuthorId = async (authorID) => {
  const [booksByID] = await connection
    .execute('SELECT * FROM model_example.books WHERE author_id = ?', [authorID]);

  return booksByID;
}

const getBookByID = async (id) => {
  const query = 'SELECT title FROM model_example.books WHERE id = ?';
  const [book] = await connection.execute(query, [id]);

  if (book.length === 0) return null;

  return book;
}

const isValid = (title, authorID) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!authorID || !(authorID >= 1 && authorID <= 5)) return false;

  return true;
}

const create = async (title, authorID) => connection.execute(
	'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
	[title, authorID],
);

module.exports = {
  getAll,
  getByAuthorId,
  getBookByID,
  isValid,
  create,
};
