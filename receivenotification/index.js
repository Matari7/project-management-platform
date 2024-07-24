const express = require("express");
const bodyParser = require("body-parser");
const notificationService = require("./notificationService");

const app = express();
app.use(bodyParser.json());

app.get("/notifications/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const notification = await notificationService.receiveNotification(id);
    res.status(200).json(notification);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3012, () => {
  console.log("Receive Notification service running on port 3005");
});
