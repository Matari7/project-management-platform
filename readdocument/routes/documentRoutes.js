const express = require('express');
const router = express.Router();
const documentController = require('../controllers/documentController');

router.post('/', documentController.getDocuments);

module.exports = router;
