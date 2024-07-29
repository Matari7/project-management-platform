const express = require('express');
const bodyParser = require('body-parser');
const userService = require('./userservice');
const { swaggerUi, swaggerSpec } = require('./swagger');

const app = express();
app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
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
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
app.post('/users', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userService.createUser(email, password);
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Retrieve a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user to retrieve
 *     responses:
 *       200:
 *         description: A user object
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: 1
 *                 email:
 *                   type: string
 *                   example: user@example.com
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
app.get('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userService.getUser(id);
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3002, () => {
  console.log('Read User service running on port 3002');
});
