const pool = require('./db');

const readCommentaries = async (projectId) => {
  const [rows] = await pool.query('SELECT * FROM comments WHERE project_id = ?', [projectId]);
  return rows;
};

module.exports = {
  readCommentaries,
};
