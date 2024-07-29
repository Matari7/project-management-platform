const createProject = async (mysqlUsersPool, mysqlProjectsPool, name, description, start_date, end_date, status, user_id) => {
  // Verifica que el usuario exista en la base de datos de usuarios de MySQL
  const [userRows] = await mysqlUsersPool.query('SELECT * FROM users WHERE id = ?', [user_id]);
  if (userRows.length === 0) {
    throw new Error('User does not exist');
  }

  // Inserta el proyecto en la base de datos de proyectos de MySQL
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
