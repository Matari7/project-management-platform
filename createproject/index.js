const express = require('express');
const bodyParser = require('body-parser');
const projectService = require('./projectService');

const app = express();
app.use(bodyParser.json());

app.post('/projects', async (req, res) => {
  const { name, description, start_date, end_date, status, user_id } = req.body;
  try {
    const project = await projectService.createProject(name, description, start_date, end_date, status, user_id);
    res.status(201).json(project);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3018, () => {
  console.log('Create Project service running on port 3018');
});
