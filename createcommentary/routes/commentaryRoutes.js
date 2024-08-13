const express = require('express');
const router = express.Router();
const commentaryController = require('../controllers/commentaryController');

router.post('/create', commentaryController.createCommentary);

module.exports = router;
