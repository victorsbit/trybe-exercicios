const testService = require('../services/testService');

const test = (_req, res) => {
  return res.status(200).json({ message: 'ok!!' });
}

const login = (req, res) => {
  try {
    const { username, password } = req.body;

    const { admin, token } = testService.login(username, password);
    if (!admin && !token) return res.status(400).json({ message: 'nao' });

    return res.status(201).json({ admin, token });
  } catch (error) {
    return res.status(500).json({ message: 'not ok!' });
  }
}

module.exports = { test, login };
