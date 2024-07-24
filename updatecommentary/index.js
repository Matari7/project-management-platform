const express = require('express');
const bodyParser = require('body-parser');
const commentaryService = require('./commentaryService');

const app = express();
app.use(bodyParser.json());

app.put('/commentaries/:projectId', async (req, res) => {
  const { projectId } = req.params;
  const { content } = req.body;
  try {
    const commentaries = await commentaryService.updateCommentaries(projectId, content);
    res.status(200).json(commentaries);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3016, () => {
  console.log('Read Commentaries service running on port 3016');
});
