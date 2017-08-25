const express = require('express');
const router = express.Router();
const ctrl = require('./music.ctrl');

router.get('/', ctrl.manage);
router.get(['/search', '/search/:keyword'], ctrl.search);
router.get('/play', ctrl.play);
router.get('/down', ctrl.down);
router.post('/down', ctrl.down);

module.exports = router;
