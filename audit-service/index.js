const express = require('express');
const bodyParser = require('body-parser');
const auditService = require('./auditservice');
const { swaggerUi, swaggerSpec } = require('./swagger');

const app = express();
app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3007, () => {
  console.log('Audit service running on port 3007');
});

/**
 * @swagger
 * /loginAttempt:
 *   post:
 *     summary: Record a login attempt
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 example: 123
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               success:
 *                 type: boolean
 *                 example: true
 *               timestamp:
 *                 type: string
 *                 format: date-time
 *                 example: "2024-07-28T12:34:56Z"
 *     responses:
 *       200:
 *         description: Login attempt recorded successfully
 *       500:
 *         description: Internal server error
 */
app.post('/loginAttempt', async (req, res) => {
  const { userId, email, success, timestamp } = req.body;
  try {
    await auditService.emit('loginAttempt', { data: { userId, email, success, timestamp } });
    res.status(200).send('Login attempt recorded successfully');
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});
