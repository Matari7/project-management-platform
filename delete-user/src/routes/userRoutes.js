const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to handle deleting a user by ID
router.delete('/:id', userController.deleteUser);

module.exports = router;
