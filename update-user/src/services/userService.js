const User = require('../models/User');

exports.updateUser = async (id, userData) => {
  // Find user by primary key
  const user = await User.findByPk(id);
  if (!user) return null; // Return null if user not found

  // Update user properties
  const { username, email, password } = userData;
  if (password) {
    user.password_hash = password; // Update password if provided
  }

  user.username = username || user.username;
  user.email = email || user.email;

  // Save changes to the database
  await user.save();
  return user;
};
