const mongoose = require('mongoose');

// Schema definition for roles
const roleSchema = new mongoose.Schema({
    user_id: { type: String, required: true }, // User ID associated with the roles
    roles: [{ type: String, required: true }] // Array of roles for the user
});

// Model definition for the 'Role' collection
const Role = mongoose.model('Role', roleSchema);

module.exports = Role;
