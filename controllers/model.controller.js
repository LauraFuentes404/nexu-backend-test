const modelsService = require('../services/models.service');

async function updateModelAveragePrice(req, res, next) {
  try {
    const { id } = req.params;
    const { average_price } = req.body;

    const updatedModel = await modelsService.updateModelAveragePrice(id, average_price);

    res.json(updatedModel);
  } catch (err) {
    next(err);
  }
}

async function listModels(req, res, next) {
  try {
    const { greater, lower } = req.query;

    const models = await modelsService.listModels(greater, lower);

    res.json(models);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  updateModelAveragePrice,
  listModels,
};