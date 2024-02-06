const Sequelize = require('sequelize');
const configDB = require('../config/database');
const connection = new Sequelize(configDB);

const User = require('../models/User');

User.init(connection);

module.exports = connection;