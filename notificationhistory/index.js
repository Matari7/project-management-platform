const express = require("express");
const bodyParser = require("body-parser");
const notificationService = require("./notificationService");

const app = express();
app.use(bodyParser.json());

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
