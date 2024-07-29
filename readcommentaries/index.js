const express = require('express');
const bodyParser = require('body-parser');
const commentaryService = require('./commentaryService');

const app = express();
app.use(bodyParser.json());

/**
 * @swagger
 * /commentaries/{projectId}:
 *   get:
 *     summary: Get commentaries by project ID
 *     description: Retrieve commentaries associated with a specific project based on project ID.
 *     parameters:
 *       - in: path
 *         name: projectId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the project to fetch commentaries for
 *     responses:
 *       '200':
 *         description: Successful retrieval of commentaries
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
app.get('/commentaries/:projectId', async (req, res) => {
  const { projectId } = req.params;
  try {
    const commentaries = await commentaryService.readCommentaries(projectId);
    res.status(200).json(commentaries);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(3015, () => {
  console.log('Read Commentaries service running on port 3015');
});
