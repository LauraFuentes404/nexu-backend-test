const sequelize = require('../bd');
const { Model, Brand } = require('../models/models');

async function migrateModels() {
    const data = require('./models');
    await sequelize.sync();
    for (let i = 0; i < data.length; i++) {
        const { name, average_price, brand_name } = data[i];

        // Busca la marca correspondiente en la tabla "brands"
        var brand = await Brand.findOne({ where: { brand_name: brand_name } });
        if (!brand) {
            brand = await Brand.create({
                brand_name: brand_name
            });
            console.log(brand);
        }

        // Busca el modelo correspondiente en la tabla "models"
        let model = await Model.findOne({ where: { name: name, brandId: brand.id } });

        if (model) {
            // Si ya existe un modelo con el mismo name y brandId, se actualiza el registro existente
            await model.update({
                average_price: average_price
            });
        } else {
            // Si no existe un modelo con el mismo name y brandId, se crea un nuevo registro
            model = await Model.create({
                name: name,
                average_price: average_price,
                brandId: brand.id
            });
        }
    }

    console.log('Models migrated successfully');
}
migrateModels();