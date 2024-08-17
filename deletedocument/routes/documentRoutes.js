const express = require('express');
const router = express.Router();
const documentController = require('../controllers/documentController');

// Route to handle deleting a document by ID
router.delete('/:id', documentController.deleteDocument);

module.exports = router;
