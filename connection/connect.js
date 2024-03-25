const { Sequelize } = require('sequelize');
require('dotenv').config();


const sequelize = new Sequelize(process.env.DEFAULT_DATABASE, process.env.USER, process.env.PASSWORD, {
    dialect: 'mysql',
    host: process.env.DB_HOST
});

module.exports = sequelize;
