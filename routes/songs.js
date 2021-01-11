const express = require('express');
const router = express.Router();

const {getSongs, postSong, deleteSongs} = require('../controllers/songController.js');

router.get('/songs', getSongs);
router.post('/song', postSong);
router.delete('/song', deleteSongs);

module.exports = router;