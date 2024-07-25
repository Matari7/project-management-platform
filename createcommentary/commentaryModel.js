const { mysqlUsersPool, mysqlProjectsPool, mysqlCommentariesPool } = require('./db');

const createCommentary = async (projectId, user_id, content) => {
  // Verify project exists in MySQL users database
  const [projectRows] = await mysqlProjectsPool.query('SELECT * FROM projects WHERE id = ?', [projectId]);
  if (projectRows.length === 0) {
    throw new Error('Project does not exist');
  }

  // Verify user exists in MySQL users database
  const [userRows] = await mysqlUsersPool.query('SELECT * FROM users WHERE id = ?', [user_id]);
  if (userRows.length === 0) {
    throw new Error('User does not exist');
  }

  // Insert project into MySQL projects database
  const query = 
    'INSERT INTO comments (project_id, user_id, content) VALUES (?, ?, ?)';
  const values = [projectId, user_id, content];

  const [result] = await mysqlCommentariesPool.query(query, values);
  return { id: result.insertId, projectId, user_id, content };
};

module.exports = {
  createCommentary,
};
