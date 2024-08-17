const express = require('express');
const router = express.Router(); // Create a new router object for defining routes
const subscriptionController = require('../controllers/subscriptionController'); // Import the subscription controller

// Define route for subscribing to a project
router.post('/subscribe', subscriptionController.subscribe);

// Define route for fetching all subscriptions
router.get('/subscriptions', subscriptionController.getSubscriptions);

module.exports = router; // Export the router to be used in the main application
