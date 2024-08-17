const express = require('express');
const projectController = require('../controllers/projectController');
const router = express.Router();

// Route to handle creating a new project
router.post('/create', projectController.createProject);

module.exports = router;
