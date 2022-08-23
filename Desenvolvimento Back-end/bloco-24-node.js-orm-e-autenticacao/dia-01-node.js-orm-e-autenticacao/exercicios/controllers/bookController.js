const express = require('express');
const bookService = require('../services/bookService');

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const books = await bookService.getAll();

    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'SIKE' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const { code, result } = await bookService.getByID(id);

    return res.status(code).json(result);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'SIKE' });
  }
});

module.exports = router;
