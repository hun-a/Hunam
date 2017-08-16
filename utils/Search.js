'use strict';
const EventEmitter = require('events');
const Youtube = require('youtube-node');
class Search extends EventEmitter {}
const search = new Search();

const youtube = new Youtube();
youtube.setKey('AIzaSyB1OOSpTREs85WUMvIgJvLTZKye4BVsoFU');

const searchContents = [];
Search.prototype.searchContents = searchContents;
Search.prototype.searchInYoutube = function(keyword, count) {
  youtube.search(keyword, count, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    for (let item of result.items) {
      const thumbnail = item.snippet.thumbnails.medium;
      searchContents.push({
        vedioId: item.id.videoId,
        title: item.snippet.title,
        thumbnailName: thumbnail.url,
        thumbnailWidth: thumbnail.width,
        thumbnailHeight: thumbnail.height
      });
    }
    search.emit('complete');
  });
};

module.exports = search;
