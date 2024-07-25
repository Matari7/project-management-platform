const { mysqlUsersPool, mysqlProjectsPool } = require('./db');

const createProject = async (name, description, start_date, end_date, status, user_id) => {
  // Verify user exists in MySQL users database
  const [userRows] = await mysqlUsersPool.query('SELECT * FROM users WHERE id = ?', [user_id]);
  if (userRows.length === 0) {
    throw new Error('User does not exist');
  }

  // Insert project into MySQL projects database
  const query = `
    INSERT INTO projects (name, description, start_date, end_date, status, user_id)
    VALUES (?, ?, ?, ?, ?, ?)`;
  const values = [name, description, start_date, end_date, status, user_id];

  const [result] = await mysqlProjectsPool.query(query, values);
  return { id: result.insertId, name, description, start_date, end_date, status, user_id };
};

module.exports = {
  createProject,
};
