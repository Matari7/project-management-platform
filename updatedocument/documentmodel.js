const { documentPool } = require('./db');

const updateDocument = async (id, { name, path, project_id }) => {
  try {
    const query = 'UPDATE documents SET name = ?, path = ?, project_id = ? WHERE id = ?';
    const [result] = await documentPool.query(query, [name, path, project_id, id]);
    if (result.affectedRows === 0) {
      return null;
    }
    return { id, name, path, project_id };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  updateDocument,
};
