const express = require('express');
const router = express.Router();

const {getSongs, postSong} = require('../controllers/songController.js');

router.get('/songs', getSongs);
router.post('/song', postSong);

module.exports = router;