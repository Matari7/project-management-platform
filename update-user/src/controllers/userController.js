const userService = require('../services/userService');

exports.updateUser = async (req, res) => {
  try {
    // Attempt to update the user with the provided ID and data
    const updatedUser = await userService.updateUser(req.params.id, req.body);

    if (!updatedUser) {
      // If the user is not found, return a 404 status
      return res.status(404).json({ message: 'User not found' });
    }

    // Return the updated user with a 200 status
    res.status(200).json(updatedUser);
  } catch (error) {
    // Return a 400 status with the error message if an error occurs
    res.status(400).json({ message: error.message });
  }
};
