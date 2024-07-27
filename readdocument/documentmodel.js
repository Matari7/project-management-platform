const { documentPool } = require('./db');

const getDocumentById = async (id) => {
  try {
    const query = 'SELECT * FROM documents WHERE id = ?';
    const [rows] = await documentPool.query(query, [id]);
    return rows[0];
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getDocumentById,
};
