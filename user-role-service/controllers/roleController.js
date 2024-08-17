const roleService = require('../services/roleService');
const User = require('../models/userModel');

//Adds a role to user, request object with userId and role in the body
exports.addRole = async (req, res) => {
    try {
        const { userId, role } = req.body;
        const updatedRole = await roleService.addRoleToUser(userId, role);
        res.status(200).json(updatedRole);
    } catch (error) {
        if (error.message === 'User not found') {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(400).json({ message: error.message });
    }
};

// Request object with userId in the params and send the result
exports.getRoles = async (req, res) => {
    try {
        const { userId } = req.params;
        const roles = await roleService.getUserRoles(userId);
        if (!roles) {
            return res.status(404).json({ message: 'Roles not found' });
        }
        res.status(200).json(roles);
    } catch (error) {
        if (error.message === 'User not found') {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(400).json({ message: error.message });
    }
};

//Retrieves all users with their IDs and usernames
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: ['id', 'username']  // Fetch only ID and username
        });
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users' });
    }
};

