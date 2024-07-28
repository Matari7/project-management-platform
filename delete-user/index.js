const express = require('express');
const bodyParser = require('body-parser');
const userService = require('./userservice');

const app = express();
app.use(bodyParser.json());

app.delete('/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await userService.deleteUser(id);
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3004, () => {
  console.log('Delete User service running on port 3004');
});

  