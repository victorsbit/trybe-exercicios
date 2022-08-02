const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const PORT = 3000;

// 1
app.get('/ping', function (req, res) {
  res.status(200).json({ message: 'pong' });
});

// 2
app.post('/hello', function (req, res) {
  const { name } = req.body;

  res.status(201).json({ message: `Hello, ${name}` });
});

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
