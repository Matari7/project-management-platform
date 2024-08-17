const express = require('express');
const router = express.Router();
const commentaryController = require('../controllers/commentaryController');

// Route to handle deleting a commentary by ID
router.delete('/delete/:id', commentaryController.deleteCommentary);

module.exports = router;
