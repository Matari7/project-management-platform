const pool = require('./db');

const updateCommentary = async (id, content) => {
  const [result] = await pool.query(
    'UPDATE comments SET content = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
    [content, id]
  );
  return result.affectedRows > 0;
};

module.exports = {
  updateCommentary,
};
