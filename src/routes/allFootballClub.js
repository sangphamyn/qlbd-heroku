const express = require('express');
const router = express.Router();

const allFootballClub = require('../app/controllers/AllFootballClubController');
const footballClubController = require('../app/controllers/FootballClubController');

router.get('/:slug', footballClubController.show);
router.get('/', allFootballClub.index);

module.exports = router;
