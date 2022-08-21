const jwt = require('jsonwebtoken');

const secret = 'seusecretdetoken';

const test = (_req, res) => {
  return res.status(200).json({ message: 'ok!!' });
}

const login = (req, res) => {
  const { username, password } = req.body;
  
  if (username === 'user', password === 'pass') {
    const jwtConfig = {
      expiresIn: '1h',
      algorithm: 'HS256',
    };
  
    const token = jwt.sign({ data: username }, secret, jwtConfig);

    return res.status(200).json({ admin: false, token });
  }

  return res.status(401).json({ message: 'not ok!' });
}

module.exports = { test, login };
