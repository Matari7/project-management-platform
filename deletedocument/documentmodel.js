const { documentPool } = require('./db');

const deleteDocument = async (id) => {
  try {
    const query = 'DELETE FROM documents WHERE id = ?';
    const [result] = await documentPool.query(query, [id]);
    return result.affectedRows > 0;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  deleteDocument,
};
