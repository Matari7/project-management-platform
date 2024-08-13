const express = require('express');
const projectController = require('../controllers/projectController');
const router = express.Router();

router.post('/create', projectController.createProject);

module.exports = router;
