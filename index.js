const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const user = require('./api/user');

app.set('view engine', 'pug');
app.locals.pretty = true;
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', user);

module.exports = app;
