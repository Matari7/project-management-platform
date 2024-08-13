const express = require('express');
const router = express.Router();
const commentaryController = require('../controllers/commentaryController');

router.get('/:projectId', commentaryController.getCommentaries);

module.exports = router;
