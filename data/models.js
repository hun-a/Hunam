const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite',
  logging: false
});

const User = sequelize.define('User', {
  key: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  id: {
    type: Sequelize.STRING  // varchar 255
  }
});

module.exports = {sequelize, User};
