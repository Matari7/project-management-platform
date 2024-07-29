require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const userService = require('./userService');
const auditService = require('../audit-service/auditservice'); 

const app = express();
app.use(bodyParser.json());

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const { token, user } = await userService.loginUser(email, password);
    res.status(200).json({ token, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3006, () => {
  console.log('Login service running on port 3006');
});

// Configura y escucha eventos de auditoría
userService.on('loginAttempt', (event) => {
  console.log('Login attempt event received in login service:', event);
  auditService.emit('loginAttempt', event); // Emitir evento para el servicio de auditoría
});