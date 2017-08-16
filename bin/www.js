const express = require('express');
const fs = require('fs');
const app = express();
const port = 10000;
const Downloader = require('../utils/Downloader');

app.use(express.static('public'));

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
  fs.readFile(`${__dirname}/../api/index.html`, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
});
