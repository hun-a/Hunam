'use strict';

const EventEmitter = require('events');
const YouTubeSearch = require('youtube-search');
const conf = require('./configure');
class Search extends EventEmitter {}
const search = new Search();
const opts = {
  maxResults: 10,
  key: conf.key
};

const searchContents = [];
Search.prototype.searchContents = searchContents;
Search.prototype.searchInYoutube = function(keyword) {
  YouTubeSearch(keyword, opts, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    for (let item of result) {
      const thumbnail = item.thumbnails.medium;
      searchContents.push({
        vedioId: item.id,
        link: item.link,
        title: item.title,
        discription: item.description,
        thumbnailName: thumbnail.url,
        thumbnailWidth: thumbnail.width,
        thumbnailHeight: thumbnail.height
      });
    }
    search.emit('complete');
  });
};

module.exports = search;
