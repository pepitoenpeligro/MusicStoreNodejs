const express = require('express');
const router = express.Router();

const {getSongs} = require('../controllers/songController.js');

router.get('/songs', getSongs);

module.exports = router;