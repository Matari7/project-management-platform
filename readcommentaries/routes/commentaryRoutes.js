const express = require('express');
const router = express.Router(); // Create a new instance of Express Router
const commentaryController = require('../controllers/commentaryController'); // Import the commentary controller

// Route to get commentaries for a specific project
// URL pattern: /:projectId
// Handles GET requests to retrieve commentaries based on the project ID
router.get('/:projectId', commentaryController.getCommentaries);

module.exports = router; // Export the router to be used in other parts of the application
