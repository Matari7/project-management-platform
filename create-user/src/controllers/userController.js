// Importing the userService, which contains business logic for handling user-related operations
const userService = require('../services/userService');

// Exporting the createUser controller function to handle HTTP POST requests for creating a new user
exports.createUser = async (req, res) => {
  try {
    // Attempting to create a new user using the data provided in the request body
    const user = await userService.createUser(req.body);

    // If successful, send a response with status code 201 (Created) and the newly created user as JSON
    res.status(201).json(user);
  } catch (error) {
    // If an error occurs during user creation, catch the error and send a response with status code 400 (Bad Request)
    // The response includes an error message in JSON format
    res.status(400).json({ message: error.message });
  }
};
