const express = require('express');
const app = express();

app.get('/', (_req, res) => {
  res.status(200).json({ message: "pong!" });
});

app.listen(3000, () => console.log('ouvindo na porta 3000'));
