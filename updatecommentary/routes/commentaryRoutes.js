const express = require('express');
const router = express.Router();
const commentaryController = require('../controllers/commentaryController');

router.put('/update/:id', commentaryController.updateCommentary);

module.exports = router;
