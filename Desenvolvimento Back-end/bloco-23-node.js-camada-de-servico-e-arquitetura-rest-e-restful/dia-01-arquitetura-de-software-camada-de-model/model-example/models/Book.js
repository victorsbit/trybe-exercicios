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

module.exports = {
  getAll,
  getByAuthorId,
};
