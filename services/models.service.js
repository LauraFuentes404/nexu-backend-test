const {Model} = require('../models/models');
const { Op } = require('sequelize');

async function updateModelAveragePrice(id, averagePrice) {
  try {
    const model = await Model.findByPk(id);

    if (!model) {
      return {
        success: false,
        message: `Model with id ${id} not found`,
      };
    }

    if (averagePrice <= 100000) {
      return {
        success: false,
        message: `Average price must be greater than 100,000 !`,
      };
    }

    model.average_price = averagePrice;
    await model.save();

    return {
      success: true,
      data: model.toJSON(),
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
}
async function listModels(greater, lower) {
  let where = {};

  if (greater && lower) {
    where = {
      [Op.and]: [
        { average_price: { [Op.gt]: greater } },
        { average_price: { [Op.lt]: lower } },
      ],
    };
  } else if (greater) {
    where.average_price = { [Op.gt]: greater };
  } else if (lower) {
    where.average_price = { [Op.lt]: lower };
  }

  const models = await Model.findAll({ where });

  return models.map((model) => model.toJSON());
}

module.exports = {
  updateModelAveragePrice,
  listModels,
};