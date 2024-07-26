const { projectPool } = require('./db');

const checkProjectExists = async (projectId) => {
  const query = `SELECT COUNT(*) AS count FROM projects WHERE id = ?`;
  const [rows] = await projectPool.query(query, [projectId]);
  return rows[0].count > 0;
};

module.exports = {
  checkProjectExists,
};
