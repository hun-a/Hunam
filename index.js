const http = require('http'),
      fs = require('fs'),
      path = require('path'),
      util = require('util');

http.createServer((req, res) => {
  const filePath = __dirname + '/users/hun/G.Soul_You_M-V.mp3';
  const stat = fs.statSync(filePath);
  console.log(stat);
  res.writeHead(200, {
    'Content-Type': 'audio/mpeg',
    'Content-Length': stat.size
  });

  fs.createReadStream(filePath).pipe(res);
}).listen(10000);
