const loginService = require('../services/loginService');

const authController = {
    login: async (req, res) => {
        const { username, password } = req.body;

        try {
            const result = await loginService.login(username, password);
            if (!result.success) {
                return res.status(401).json({ message: result.message });
            }
            // Redirige al frontend en Ubuntu si la autenticación es exitosa
            res.redirect(`${process.env.REACT_APP_API_URL}:3000`);
        } catch (err) {
            res.status(500).json({ message: 'Server error' });
        }
    }
};

module.exports = authController;
