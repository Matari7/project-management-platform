const express = require("express");
const bodyParser = require("body-parser");
const notificationService = require("./notificationService");

const app = express();
app.use(bodyParser.json());

app.get("/notifications/history/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const notifications = await notificationService.getNotificationHistory(userId);
    res.status(200).json(notifications);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3013, () => {
  console.log("Notification History service running on port 3006");
});
