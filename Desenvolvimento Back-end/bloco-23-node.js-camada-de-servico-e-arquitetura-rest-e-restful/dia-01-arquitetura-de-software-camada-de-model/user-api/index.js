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

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id);

  const user = await User.getUserById(id);
  if (!user) return res.status(404).json({ message: 'User not found' });

  return res.status(200).json(user[0]);
});

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
