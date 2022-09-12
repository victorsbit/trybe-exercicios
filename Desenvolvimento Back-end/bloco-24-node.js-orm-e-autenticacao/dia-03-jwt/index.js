const express = require ('express');
const { testRouter } = require('./routes/testRouter');
const app = express();

app.use(express.json());

app.use('/login', testRouter);

app.listen(3000, () => console.log('ouvindo na 3000'));
