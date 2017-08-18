const app = require('../');
const port = 10000;
const syncDB = require('../data/sync-db');

syncDB().then(_ => {
  console.log('Sync database!');
  app.listen(port, () => {
    console.log(`Server is running on port ${port}!`);
  });
});
