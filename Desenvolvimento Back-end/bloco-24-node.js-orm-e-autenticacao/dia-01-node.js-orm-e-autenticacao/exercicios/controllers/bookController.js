const express = require('express');
const bookService = require('../services/bookService');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const books = await bookService.getAll();

    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json({ message: 'SIKE' });
  }
});

module.exports = router;
