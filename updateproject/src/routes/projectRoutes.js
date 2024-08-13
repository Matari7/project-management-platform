const express = require('express');
const projectController = require('../controllers/projectController');
const router = express.Router();

router.put('/update/:id', projectController.updateProject);

module.exports = router;
