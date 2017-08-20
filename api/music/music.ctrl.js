'use strict';

const models = require('../../data/models');
const youtube = require('../../utils/Search');
const downloader = require('../../utils/Downloader.js');
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

const down = function(req, res) {
  const link = req.body.link;
  if (!link) {
    res.status(400).end();
  }
  const fileName = link.split('?')[1];
  console.log(link, fileName);

  downloader(link, fileName, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
    res.render('down');
  });
};

module.exports = {
  manage, search, play, down
};
