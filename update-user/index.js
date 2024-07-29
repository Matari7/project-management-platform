require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const userService = require('./userService');

const app = express();
app.use(bodyParser.json());

app.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      throw new Error('Email and password are required');
    }
    const user = await userService.updateUser(id, email, password);
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3003, () => {
  console.log('Update User service running on port 3003');
});
