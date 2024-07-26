const { documentPool } = require('./db');

const createDocument = async (name, path, projectId) => {
  const query = `
    INSERT INTO documents (name, path, project_id)
    VALUES (?, ?, ?)`;
  const values = [name, path, projectId];

  const [result] = await documentPool.query(query, values);
  return { id: result.insertId, name, path, projectId };
};

module.exports = {
  createDocument,
};
