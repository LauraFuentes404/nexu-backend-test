const {Brand,Model} = require('../models/models');



async function getAllBrands() {
  const marcas = await Brand.findAll({
    include: {
      model: Model,
      attributes: ['id', 'name', 'average_price']
    }
  });

  const resultados = marcas.map(marca => {
    const modelos = marca.models;
    const totalModelos = modelos.length;
    const totalPrecios = modelos.reduce((total, modelo) => total + modelo.average_price, 0);
    const precioMedio = totalPrecios / totalModelos;

    return {
      id: marca.id,
      name: marca.brand_name,
      average_price: precioMedio
    };
  });

  return resultados;
}



async function getModelsByBrandId(id) {
  const brand = await Brand.findByPk(id);
  if (!brand) throw new Error('Brand not found');
  return await brand.getModels({
    attributes: ['id', 'name', 'average_price']
  });
}

async function addBrand(brand) {
  return await Brand.create(brand);
}

async function addModel(brandId, model) {
    const brand = await Brand.findByPk(brandId);
    if (!brand) throw new Error('Brand not found');
    const existingModel = await brand.getModels({
      where: { name: model.name }
    });
    if (existingModel.length > 0) {
      throw new Error('Model already exists');
    }
    if (model.precio_promedio && model.precio_promedio <= 100000) {
      throw new Error('Average price must be greater than 100,000');
    }
    return await Model.create({ ...model, brandId: brand.id });
}


module.exports = { getAllBrands, getModelsByBrandId, addBrand, addModel };