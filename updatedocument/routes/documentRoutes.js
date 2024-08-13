const express = require('express');
const router = express.Router();
const documentController = require('../controllers/documentController');

router.put('/:id', documentController.updateDocument);

module.exports = router;
