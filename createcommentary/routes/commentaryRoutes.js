const express = require('express');
const router = express.Router();
const commentaryController = require('../controllers/commentaryController');

// Route to handle creating a new commentary
router.post('/create', commentaryController.createCommentary);

module.exports = router;
