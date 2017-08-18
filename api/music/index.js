const express = require('express');
const router = express.Router();
const ctrl = require('./music.ctrl');

router.get('/', ctrl.manage);
router.get('/down', ctrl.down);
router.get('/down/:list', ctrl.down);
router.get('/play', ctrl.play);
router.get('/search/:keyword', ctrl.search);

module.exports = router;
