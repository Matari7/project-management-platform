const express = require('express');
const bodyParser = require('body-parser');
const commentaryService = require('./commentaryService');

const app = express();
app.use(bodyParser.json());

app.post('/commentaries', async (req, res) => {
  const { projectId, userId, content } = req.body;
  try {
    const commentary = await commentaryService.createCommentary(projectId, userId, content);
    res.status(201).json(commentary);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3014, () => {
  console.log('Create Commentary service running on port 3014');
});
