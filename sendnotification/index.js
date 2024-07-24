const express = require("express");
const bodyParser = require("body-parser");
const notificationService = require("./notificationService");

const app = express();
app.use(bodyParser.json());

app.post("/notifications", async (req, res) => {
  const { message, userId } = req.body;
  try {
    const notification = await notificationService.sendNotification(message, userId);
    res.status(201).json(notification);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3011, () => {
  console.log("Send Notification service running on port 3004");
});
