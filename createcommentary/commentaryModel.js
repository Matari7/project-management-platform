const pool = require('./db');

const createCommentary = async (projectId, userId, content) => {
  const [result] = await pool.query(
    'INSERT INTO comments (project_id, user_id, content) VALUES (?, ?, ?)',
    [projectId, userId, content]
  );
  return { id: result.insertId, projectId, userId, content };
};

module.exports = {
  createCommentary,
};
