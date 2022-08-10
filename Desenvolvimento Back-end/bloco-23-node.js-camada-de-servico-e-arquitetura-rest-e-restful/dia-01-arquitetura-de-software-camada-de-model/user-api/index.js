const express = require('express');
const bodyParser = require('body-parser');
const User = require('./models/User');

const app = express();

app.use(bodyParser.json());

const PORT = 3000;

app.get('/user', async (_req, res) => {
  const users = await User.getAll();

  return res.status(200).json(users);
});

app.post('/user', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const user = await User.create({ firstName, lastName, email, password });

  return res.status(201).json(user);
});

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
