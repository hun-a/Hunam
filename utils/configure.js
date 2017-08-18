const fs = require('fs');
const path = require('path');
const configurePath = path.join(__dirname, '..', 'conf/setting.json');

module.exports = JSON.parse(fs.readFileSync(configurePath, 'utf-8'));
