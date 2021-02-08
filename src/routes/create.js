const express = require('express');
const router = express.Router();

const createController = require('../app/controllers/CreateController');

router.get('/', createController.index);
router.post('/store', createController.store);

module.exports = router;