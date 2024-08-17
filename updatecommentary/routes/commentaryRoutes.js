const express = require('express');
const router = express.Router();
const commentaryController = require('../controllers/commentaryController');

// Route to update a commentary by ID
router.put('/update/:id', commentaryController.updateCommentary);

module.exports = router;
