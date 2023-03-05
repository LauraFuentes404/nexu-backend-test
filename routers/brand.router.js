const express = require('express');
const brandRouter  = express.Router();
const brandsController = require('../controllers/brand.controller');

brandRouter.get('/', brandsController.getAllBrands);
brandRouter.get('/:id/models', brandsController.getModelsByBrandId);
brandRouter.post('/', brandsController.addBrand);
brandRouter.post('/:id/models', brandsController.addModel);

module.exports = brandRouter;