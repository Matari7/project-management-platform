const express = require("express");
const bodyParser = require("body-parser");
const notificationService = require("./notificationService");

const app = express();
app.use(bodyParser.json());

/**
 * @swagger
 * /notifications/history/{user_id}:
 *   get:
 *     summary: Get notification history by user ID
 *     description: Retrieve the notification history for a specific user based on user ID.
 *     parameters:
 *       - in: path
 *         name: user_id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the user to fetch notification history for
 *     responses:
 *       '200':
 *         description: Successful retrieval of notification history
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   message:
 *                     type: string
 *                   timestamp:
 *                     type: string
 *                     format: date-time
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
app.get("/notifications/history/:user_id", async (req, res) => {
  const { user_id } = req.params;
  try {
    const notifications = await notificationService.getNotificationHistory(user_id);
    res.status(200).json(notifications);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3013, () => {
  console.log("Notification History service running on port 3013");
});
