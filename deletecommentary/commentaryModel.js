const pool = require('./db');

const deleteCommentary = async (id) => {
  const [result] = await pool.query('DELETE FROM comments WHERE id = ?', [id]);
  return result.affectedRows > 0;
};

module.exports = {
  deleteCommentary,
};
