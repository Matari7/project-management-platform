const express = require('express');
const router = express.Router();
const documentController = require('../controllers/documentController');

// Route for updating a document by its ID
router.put('/:id', documentController.updateDocument);

module.exports = router;
