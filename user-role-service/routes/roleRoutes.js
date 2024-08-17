const express = require('express');
const roleController = require('../controllers/roleController');
const router = express.Router();

// Route to get all users
router.get('/users', roleController.getAllUsers);

// Route to add a role to a user
router.post('/roles/add', roleController.addRole);

// Route to get roles for a specific user
router.get('/roles/:userId', roleController.getRoles);

module.exports = router;
