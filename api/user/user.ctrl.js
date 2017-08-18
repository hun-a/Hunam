const md5 = require('md5');
const models = require('../../data/models');

const main = function(req, res) {
  const session = req.session;
  console.log('main: ', session);
  res.status(200).send(String('welcom! ' + session.user));
};

const login = function(req, res) {
  res.render('login');
};

const join = function(req, res) {
  res.render('join');
};

const create = function(req, res) {
  const id = req.body.user;
  const password = md5(req.body.password);
  const confirm = md5(req.body.confirm);
  const email = req.body.email;

  if (!id || !password || !(password === confirm) || !email) {
    return res.status(400).end();
  }

  models.User.create({id, password, email})
    .then(user => {
      req.session.login = id;
      console.log('join: ', req.session);
    })
    .catch(err => {
      console.log(err);
    });

  res.render('welcome', {user: id})
};

module.exports = {
  main, join, login, create
};
