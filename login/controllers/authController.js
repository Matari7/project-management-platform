const { authenticateUser } = require('../services/authService');

async function login(req, res) {
    try {
        const { email, password } = req.body;
        const { token, user } = await authenticateUser(email, password);
        res.json({ token, user });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
}

async function redirectToFrontend(req, res) {
    res.redirect(`${process.env.REACT_APP_API_URL}:3000`);
}

module.exports = {
    login,
    redirectToFrontend
};
