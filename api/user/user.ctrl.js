const models = require('../../data/models');

const main = function(req, res) {
  
};

const login = function(req, res) {
  res.render('login');
};

const join = function(req, res) {
  res.render('join');
};

module.exports = {
  main, join, login
};
