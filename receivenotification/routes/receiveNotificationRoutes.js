const express = require('express');
const router = express.Router();
const receiveNotificationController = require('../controllers/receiveNotificationController');

router.get('/:userId', receiveNotificationController.getUnreadNotifications);

module.exports = router;
