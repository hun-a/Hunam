'use strict';

const downloader = require('../utils/Downloader.js');

const url = 'https://youtu.be/RKLKDJ1QsLs';

downloader.download(url, "flower");
// down.download(url);

downloader.on('complete', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
