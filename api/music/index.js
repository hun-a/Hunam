const express = require('express');
const router = express.Router();
const ctrl = require('./music.ctrl');

router.get('/', ctrl.manage);
router.get('/search', ctrl.search);
router.get('/search/:keyword', ctrl.search);
router.get('/play', ctrl.play);

module.exports = router;
