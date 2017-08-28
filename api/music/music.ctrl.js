'use strict';

const models = require('../../data/models');
const youtube = require('../../utils/Search');
const downloader = require('../../utils/Downloader.js');

const manage = function(req, res) {
  res.render('management');
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
  const user = "sample";
  models.Plays.findAll({
    where: {
      user: user
    }
  }, {
    raw: true
  })
  .then(list => {
    console.log(JSON.stringify(list));
    res.render('play', {play:list});
  })
  .catch(err => {
    console.log(err);
    res.status(500).end();
  });
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

const list = function(req, res) {
  const key = req.params.key;

  if (key) {
    // save key to the database from music to user
    models.Musics.find({
      where: {
        key: key
      }
    })
    .then(music => {
      const user = {
        id: 'tester',
        name: music.title,
        length: music.duration,
        file: music.fileName
      }
      models.Plays.create(user)
      .then(() => {
        models.Plays.findAll({
          raw:true
        })
        .then(playList => {
          console.log(playList);
          res.render('list', {list:playList});
        })
        .catch(er => {
          console.log(er);
          res.status(500).end();
        });
      })
      .catch(e => {
        console.log(e);
        res.status(500).end();
      })
    })
    .catch(err => {
      console.log(err);
      res.status(500).end();
    });
  } else {
    models.Plays.findAll({
      raw:true
    })
    .then(playList => {
      console.log(playList);
      res.render('list', {list:playList});
    })
    .catch(er => {
      console.log(er);
      res.status(500).end();
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
  down,
  list
};
