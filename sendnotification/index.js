const express = require("express");
const bodyParser = require("body-parser");
const notificationService = require("./notificationService");
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
app.use(bodyParser.json());

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Send Notification API',
      version: '1.0.0',
      description: 'API documentation for Send Notification service',
    },
  },
  apis: ['./index.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /notifications:
 *   post:
 *     summary: Send a notification
 *     description: Create and send a notification to a user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *               user_id:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Successfully sent notification
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 message:
 *                   type: string
 *                 user_id:
 *                   type: string
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
app.post("/notifications", async (req, res) => {
  const { message, user_id } = req.body;
  try {
    const notification = await notificationService.sendNotification(message, user_id);
    res.status(201).json(notification);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3011, () => {
  console.log("Send Notification service running on port 3011");
});
