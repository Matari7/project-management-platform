const User = require('../models/User');

exports.updateUser = async (id, userData) => {
  const user = await User.findByPk(id);
  if (!user) return null;

  const { username, email, password } = userData;
  if (password) {
    user.password_hash = password;
  }

  user.username = username || user.username;
  user.email = email || user.email;

  await user.save();
  return user;
};
