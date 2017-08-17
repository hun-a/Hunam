const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');
const port = 10000;
const Downloader = require('../utils/Downloader');
const syncDB = require('../data/sync-db');

syncDB().then(_ => {
  console.log('Sync database!');
});

app.set('view engine', 'pug');
app.locals.pretty = true;
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('login');
});

app.post('/login', (req, res) => {
  const user = req.body.user;
  const pwd = req.body.pwd;

  res.send(user + ', ' + pwd);
});

app.get('/join', (req, res) => {
  res.render('join');
});

app.get('/down/:url/:name', (req, res) => {
  const url = req.params.url;
  const name = req.params.name;

  Downloader.download(url, name);

  Downloader.on('complete', (err, data) => {
    if (err) {
      res.send(err);
      return;
    }
    res.send('<script>alert("Download Complete")</script>');
  });
});

app.get('/play', (req, res) => {
  res.render('play');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});
