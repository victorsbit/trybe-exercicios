const jwt = require('jsonwebtoken');

const secret = 'seusecretdetoken';

const login = (username, password) => {
  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: username }, secret, jwtConfig);

  if (username === 'user' && password === 'pass') {
    return { admin: false, token };
  }

  if (username === 'admin' && password === 's3nh4S3gur4???') {
    return { admin: true, token };
  }

  return { admin: null, token: null };
};

module.exports = { login };
