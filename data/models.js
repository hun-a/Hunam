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
  },
  password: {
    type: Sequelize.STRING  // varchar 255
  },
  email: {
    type: Sequelize.STRING  // varchar 255
  }
});

const Musics = sequelize.define('Musics', {
  key: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING
  },
  url: {
    type: Sequelize.STRING
  },
  fileName: {
    type:Sequelize.STRING
  },
  duration: {
    type: Sequelize.STRING(5)
  },
  thumbnail: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  }
});

const Play = sequelize.define('Play', {
  track: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  length: {
    type: Sequelize.STRING(5)
  },
  file: {
    type: Sequelize.STRING
  }
});

module.exports = {sequelize, User, Musics, Play};
