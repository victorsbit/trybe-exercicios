const express = require('express');

const testController = require('../controllers/testController');

const testRouter = express.Router();

testRouter.get('/', testController.test);

testRouter.post('/', testController.login);

module.exports = { testRouter };
