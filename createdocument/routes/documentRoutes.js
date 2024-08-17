const express = require('express');
const router = express.Router();
const documentController = require('../controllers/documentController');

// Route to handle creating a new document
router.post('/', documentController.createDocument);

module.exports = router;
