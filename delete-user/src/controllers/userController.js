const userService = require('../services/userService');

// Controller function to handle the deletion of a user
exports.deleteUser = async (req, res) => {
  try {
    // Attempt to delete the user by ID
    const deletedUser = await userService.deleteUser(req.params.id);

    // If user not found, respond with a 404 status
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Respond with a success message if the user is deleted
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    // Handle any errors and respond with a 400 status and error message
    res.status(400).json({ message: error.message });
  }
};
