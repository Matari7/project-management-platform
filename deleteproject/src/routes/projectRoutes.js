const express = require('express');
const projectController = require('../controllers/projectController');
const router = express.Router();

router.delete('/delete/:id', projectController.deleteProject);

module.exports = router;
