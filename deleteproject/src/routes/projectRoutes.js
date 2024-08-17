const express = require('express');
const projectController = require('../controllers/projectController');
const router = express.Router();

// Route to handle deleting a project by ID
router.delete('/delete/:id', projectController.deleteProject);

module.exports = router;
