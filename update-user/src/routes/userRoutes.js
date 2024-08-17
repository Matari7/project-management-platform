const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to update a user by ID
router.put('/:id', userController.updateUser);

module.exports = router;
