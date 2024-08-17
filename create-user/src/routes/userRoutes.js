const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define a POST route to create a new user, handled by the createUser method in the userController
router.post('/', userController.createUser);

module.exports = router;
