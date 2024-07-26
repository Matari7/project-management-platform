const express = require('express');
const bodyParser = require('body-parser');
const commentaryService = require('./commentaryService');

const app = express();
app.use(bodyParser.json());

app.delete('/commentaries/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const success = await commentaryService.deleteCommentary(id);
    if (success) {
      res.status(200).json({ message: 'Commentary deleted successfully' });
    } else {
      res.status(404).json({ message: 'Commentary not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3017, () => {
  console.log('Delete Commentary service running on port 3017');
});
