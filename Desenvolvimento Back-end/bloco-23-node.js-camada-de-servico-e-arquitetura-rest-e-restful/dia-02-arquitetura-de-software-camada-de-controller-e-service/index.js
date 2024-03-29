const express = require('express');
const app = express();
const cepController = require('./controllers/cepController');

app.get('/', cepController.testResponse);

app.get('/cep/:cep', cepController.getCep);

app.listen(3000, () => console.log('ouvindo na porta 3000'));
