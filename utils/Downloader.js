'use strict';

const exec = require('child_process').exec;
const fs = require('fs');
const path = require('path');
const youtube = require('youtube-dl');

const _download = function(info, dest, callback) {
  const name = info.id;
  const destPath = `"${path.join(dest, name)}.%(ext)s"`;
  const url = info.webpage_url;
  exec(`./node_modules/youtube-dl/bin/youtube-dl -x --audio-format mp3 --audio-quality 0 -o ${destPath} ${url}`, (err, out, stderr) => {
    if (err) {
      console.log(err);
      return;
    }

    const data = {
      url: url,
      title: info.title,
      fileName: path.join(dest, `${name}.mp3'`),
      duration: info.duration,
      thumbnail: info.thumbnails[0].url,
      description: info.description
    };

    callback(err, data);
  });
};

const download = function(url, callback) {
  youtube.getInfo(url, [], (err, info) => {
    if (err) {
      console.log(err);
      return;
    }
    _download(info, `${__dirname}/../public/musics`, callback);
  });
};

module.exports = download;
