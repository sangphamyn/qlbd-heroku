const express = require('express');
const router = express.Router();

const allFootballClub = require('../app/controllers/AllFootballClubController');

router.get('/', allFootballClub.index);

module.exports = router;
