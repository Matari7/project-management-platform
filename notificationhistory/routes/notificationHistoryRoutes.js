const express = require('express');
const router = express.Router();
const notificationHistoryController = require('../controllers/notificationHistoryController');

router.get('/:userId', notificationHistoryController.getNotifications);

module.exports = router;
