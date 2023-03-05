const express = require('express');
const modelsController = require('../controllers/model.controller');

const modelRouter = express.Router();

modelRouter.put('/:id', modelsController.updateModelAveragePrice);

modelRouter.get('/', modelsController.listModels);

module.exports = modelRouter;
