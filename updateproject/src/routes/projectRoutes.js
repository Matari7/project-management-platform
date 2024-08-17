const express = require('express');
const projectController = require('../controllers/projectController');
const router = express.Router();

// Defines a route to update a project by ID
router.put('/update/:id', projectController.updateProject);

module.exports = router;
