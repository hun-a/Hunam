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
      res.render('search', {
        list: data
      });
    });
  } else {
    res.render('search', {
      list: []
    });
  }
};

const play = function(req, res) {
  res.render('play');
};

const down = function(req, res) {
  const link = req.body.link;

  if (link) {
    downloader(link, (err, data) => {
      if (err) {
        console.log(err);
        return res.status(500).end();
      }

      models.Musics.create(data)
        .then(() => {
          findAllMusics((musics, err) => {
            if (musics) {
              res.render('down', {musics: musics});
            }
            if (err) {
              console.log(err);
              res.status(500).end();
            }
          });
        })
        .catch(err => {
          console.log(err);
          res.status(500).end();
        });
    });
  } else {
    findAllMusics((musics, err) => {
      if (musics) {
        res.render('down', {musics: musics});
      }
      if (err) {
        console.log(err);
        res.status(500).end();
      }
    });
  }
};

function findAllMusics(callback) {
  models.Musics.findAll({
    raw:true
  })
  .then(musics => {
    callback(musics);
  })
  .catch(err => {
    callback(null, err);
  });
}

module.exports = {
  manage,
  search,
  play,
  down
};
