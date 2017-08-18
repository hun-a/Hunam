const express = require('express');
const router = express.Router();
const ctrl = require('./user.ctrl');

router.get('/', ctrl.main);
router.get('/login', ctrl.login);
router.get('/join', ctrl.join);

module.exports = router;
