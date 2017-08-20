'use strict';

const exec = require('child_process').exec;
const fs = require('fs');
const path = require('path');
const youtube = require('youtube-dl');

const _download = function(url, dest, name, callback) {
  console.log(!!name);
  var destPath = !!name === true ? `"${dest}/${name}.%(ext)s"` : `"${dest}/%(title)s.%(ext)s"`;

  exec(`./node_modules/youtube-dl/bin/youtube-dl -x --audio-format mp3 --audio-quality 0 -o ${destPath} ${url}`, (err, out, stderr) => {
    if (err) {
      console.log(err);
      return;
    }

    callback(err, out);
  });
};

var saveToDB = function(info) {
  // TODO need to implement saving mp3 informataion to the database
  // info.title, info.duration, info._filename;
};

const download = function(url, name, callback) {
  youtube.getInfo(url, [], (err, info) => {
    if (err) {
      console.log(err);
      return;
    }

    saveToDB(info);

    _download(url, `${__dirname}/../public/musics`, name, callback);
  });
};

module.exports = download;
