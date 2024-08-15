const express = require('express');
const { login, redirectToFrontend } = require('../controllers/authController');

const router = express.Router();

// Ruta para login
router.post('/', login);

// Redirige a la aplicación frontend en el puerto 3000
router.get('/login', redirectToFrontend);

module.exports = router;
