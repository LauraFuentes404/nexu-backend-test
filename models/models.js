const sequelize = require('../bd');
const { DataTypes } = require('sequelize');


const Model = sequelize.define('model', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  average_price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  brandId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'brands',
      key: 'id'
    }
  }, 

}, {
  tableName: 'models'
});

const Brand = sequelize.define('brand', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  brand_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'brands'
});

Brand.hasMany(Model);
Model.belongsTo(Brand);

module.exports ={Model, Brand};