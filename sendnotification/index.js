const express = require("express");
const bodyParser = require("body-parser");
const notificationService = require("./notificationService");

const app = express();
app.use(bodyParser.json());

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
  console.lo
