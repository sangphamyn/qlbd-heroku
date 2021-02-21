const express = require('express');
const router = express.Router();

const ZoomController = require('../app/controllers/ZoomController.js');

router.get('/', ZoomController.index);

module.exports = router;
