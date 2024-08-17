const User = require('../models/User');

// Service function to handle the deletion of a user by ID
exports.deleteUser = async (id) => {
  // Find the user by their primary key (ID)
  const user = await User.findByPk(id);
  
  // If the user does not exist, return null
  if (!user) return null;

  // Delete the user from the database
  await user.destroy();
  
  // Return the deleted user object
  return user;
};
