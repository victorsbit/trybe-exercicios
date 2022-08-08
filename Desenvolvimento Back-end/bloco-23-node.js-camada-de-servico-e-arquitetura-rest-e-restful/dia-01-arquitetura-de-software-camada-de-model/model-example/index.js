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

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;

  const book = await Book.getBookByID(id);

  if (!book) return res.status(404).json({ message: 'Not found' });

  res.status(200).json(book[0]);
});

app.get('/authors/:id', async (req, res) => {
	const { id } = req.params;

	const author = await Author.findById(id);

	if (!author) return res.status(404).json({ message: 'Not found' });

	res.status(200).json(author);
});

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});
