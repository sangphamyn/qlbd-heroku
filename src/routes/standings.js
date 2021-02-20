const express = require('express');
const router = express.Router();

const StandingsController = require('../app/controllers/StandingsController');

router.get('/', StandingsController.index);

module.exports = router;
