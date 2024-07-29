require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const userService = require('./userservice');
const auditService = require('../audit-service/auditservice'); // Asegúrate de que la ruta sea correcta
const { swaggerUi, swaggerSpec } = require('./swagger');

const app = express();
app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user to delete
 *     responses:
 *       204:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await userService.deleteUser(id);
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       200:
 *         description: Login successful
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal server error
 */
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
