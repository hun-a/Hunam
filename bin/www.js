const express = require('express');
const fs = require('fs');
const app = express();
const port = 10000;

app.get('/', (req, res) => {
  fs.readFile(`${__dirname}/../api/index.html`,(err, data) => {
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
