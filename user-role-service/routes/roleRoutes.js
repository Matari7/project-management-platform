const express = require('express');
const roleController = require('../controllers/roleController');
const router = express.Router();

router.get('/users', roleController.getAllUsers);
router.post('/roles/add', roleController.addRole);
router.get('/roles/:userId', roleController.getRoles);

module.exports = router;
