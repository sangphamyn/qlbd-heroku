const express = require('express');
const router = express.Router();

const ScheduleController = require('../app/controllers/ScheduleController.js');

router.get('/', ScheduleController.index);

module.exports = router;
