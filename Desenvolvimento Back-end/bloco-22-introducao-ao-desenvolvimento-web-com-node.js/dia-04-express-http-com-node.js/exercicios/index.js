const express = require('express');
const app = express();

const PORT = 3000;

app.get('/ping', function (req, res) {
  res.status(200).json({ message: 'pong' });
});

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
