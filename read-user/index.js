const express = require('express');
const bodyParser = require('body-parser');
const userService = require('./userService');

const app = express();
app.use(bodyParser.json());

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

