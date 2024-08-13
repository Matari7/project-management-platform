const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');

router.post('/send', notificationController.createNotification);
router.get('/user/:userId', notificationController.getNotifications);

module.exports = router;
