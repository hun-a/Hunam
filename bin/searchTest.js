const youtube = require('../utils/Search');

youtube.searchInYoutube('꽃길', 2);

youtube.on('complete', () => {
  console.log(youtube.searchContents);
});
