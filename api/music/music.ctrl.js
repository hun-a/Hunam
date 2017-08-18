'use strict';

const models = require('../../data/models');
const youtube = require('../../utils/Search');
const manage = function(req, res) {

};

const search = function(req, res) {
  const keyword = req.params.keyword;

  if (keyword) {
    youtube(keyword, (data) => {
      res.render('search', {list:data});
    });
  } else {
    res.render('search', {list:[]});
  }
};

const play = function(req, res) {
  res.render('play');
};

module.exports = {
  manage, search, play
};
