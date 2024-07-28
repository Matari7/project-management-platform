require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const userService = require('./userservice');

const app = express();
app.use(bodyParser.json());

app.post('/users', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userService.createUser(email, password);
    res.status(201).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3001, () => {
  console.log('Create User service running on port 3001');
});


