const express = require('express');
const router = express.Router();

const ttController = require('../app/controllers/TtController');

router.get('/:id/edit', ttController.edit);
router.post('/store', ttController.store);
router.put('/:id', ttController.update);
router.delete('/:id', ttController.delete);
router.get('/', ttController.storedFbClub);

module.exports = router;