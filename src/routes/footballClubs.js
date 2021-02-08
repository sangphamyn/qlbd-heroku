const express = require('express');
const router = express.Router();

const footballClubController = require('../app/controllers/FootballClubController');

router.get('/:slug', footballClubController.show);

module.exports = router;
