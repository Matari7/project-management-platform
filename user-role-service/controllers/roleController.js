const roleService = require('../services/roleService');
const User = require('../models/userModel');

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

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: ['id', 'username']  // Obtenemos solo el ID y el nombre de usuario
        });
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users' });
    }
};

