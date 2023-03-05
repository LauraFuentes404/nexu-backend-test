const { Sequelize } = require('sequelize');
const config = require('./config.js');

const sequelize = new Sequelize(config.DATABASE, config.USERBD, config.PASSWORD, {
  host: config.HOST,
  dialect: config.DIALECT
});

module.exports = sequelize;
