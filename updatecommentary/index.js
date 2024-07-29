const express = require('express');
const bodyParser = require('body-parser');
const commentaryService = require('./commentaryService');

const app = express();
app.use(bodyParser.json());

/**
 * @swagger
 * /commentaries/{projectId}:
 *   put:
 *     summary: Update commentaries for a project
 *     description: Update existing commentaries associated with a specific project based on project ID.
 *     parameters:
 *       - in: path
 *         name: projectId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the project whose commentaries need to be updated
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Successful update of commentaries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   text:
 *                     type: string
 *                   author:
 *                     type: string
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
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
  console.log('Update Commentaries service running on port 3016');
});
