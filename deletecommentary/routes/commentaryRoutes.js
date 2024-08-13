const express = require('express');
const router = express.Router();
const commentaryController = require('../controllers/commentaryController');

router.delete('/delete/:id', commentaryController.deleteCommentary);

module.exports = router;
