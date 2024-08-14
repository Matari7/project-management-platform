const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    user_id: { type: String, required: true },
    roles: [{ type: String, required: true }]
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;
