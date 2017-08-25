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

  downloader(link, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).end();
    }

    models.Musics.create(data)
      .then(data => {
        console.log(`${data.key} is inserted to database.`);
        models.Musics.findAll({raw:true})
          .then(musics => {
            res.render('down', {musics:musics});
          })
          .catch(err => {
            console.log(err);
            res.status(500).end();
          });
      })
      .catch(err => {
        console.log(err);
        res.status(500).end();
      });
  });
};

module.exports = {
  manage, search, play, down
};
