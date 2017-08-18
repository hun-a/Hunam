'use strict';

const YouTubeSearch = require('youtube-search');
const conf = require('./configure');
const opts = {
  maxResults: 10,
  key: conf.key
};

function search(keyword, callback) {
  YouTubeSearch(keyword, opts, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const searchContents = [];
    for (let item of result) {
      const thumbnail = item.thumbnails.medium;
      searchContents.push({
        vedioId: item.id,
        link: item.link,
        title: item.title,
        discription: item.description,
        thumbnail: thumbnail.url
      });
    }
    callback(searchContents);
  });
}

module.exports = search;
