const express = require('express');
const Author = require('./models/Author');
const Book = require('./models/Book');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/books', async (_req, res) => {
  const books = await Book.getAll();

  res.status(200).json(books);
});

app.get('/books/search', async (req, res) => {
  const { author_id } = req.query;

  const books = await Book.getByAuthorId(author_id);

  res.status(200).json(books);
});

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});
