'use strict';

const exec = require('child_process').exec;
const EventEmitter = require('events');
const util = require('util');
const fs = require('fs');
const path = require('path');
const youtube = require('youtube-dl');

class Downloader extends EventEmitter {}
const downloader = new Downloader();


var title = '';
var fileName = '';
var duration = '';

function _download(url, dest, name) {
  console.log(!!name);
  var destPath = !!name === true ? `"${dest}/${name}.%(ext)s"` : `"${dest}/%(title)s.%(ext)s"`;

  exec(`./node_modules/youtube-dl/bin/youtube-dl -x --audio-format mp3 --audio-quality 0 -o ${destPath} ${url}`, (err, out, stderr) => {
    if (err) {
      console.log(err);
      return;
    }

    downloader.emit('complete', err, out);
  });
}

Downloader.prototype.download = function(url, name) {
  youtube.getInfo(url, [], (err, info) => {
    if (err) {
      console.log(err);
      return;
    }
    title = info.title;
    duration = info.duration;
    fileName = info._filename;

    _download(url, `${__dirname}/../public/musics`, name);
  });
};

module.exports = downloader;
