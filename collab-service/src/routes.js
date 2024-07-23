const express = require('express');
const router = express.Router();
const controller = require('./controller');

module.exports = (client) => {
  router.post('/add', (req, res) => controller.addMessage(client, req, res));
  router.get('/messages', (req, res) => controller.getMessages(client, req, res));

  return router;
};
