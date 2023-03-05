const brandsService = require('../services/brands.service');

async function getAllBrands(req, res) {
    try {
        const brands = await brandsService.getAllBrands();
        res.json(brands);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getModelsByBrandId(req, res) {
    try {
        const brandId = req.params.id;
        const models = await brandsService.getModelsByBrandId(brandId);
        res.json(models);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function addBrand(req, res) {
    try {
        const brand = req.body;
        const newBrand = await brandsService.addBrand(brand);
        res.status(201).json(newBrand);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


async function addModel(req, res) {
    try {
        const brandId = req.params.id;
        const model = req.body;
        const newModel = await brandsService.addModel(brandId, model);
        res.status(201).json(newModel);
    } catch (error) {
        res
            .status(400).json({ error: error.message });
    }
}

module.exports = {
    getAllBrands,
    getModelsByBrandId,
    addBrand,
    addModel,
  };