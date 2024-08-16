const loginService = require('../services/loginService');

exports.loginPage = (req, res) => {
    res.render('login');
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    const user = await loginService.authenticateUser(username, password);

    if (user) {
        // Aquí rediriges al servidor de Ubuntu
        res.redirect(`${process.env.REACT_APP_API_URL}:3000`);
    } else {
        res.render('login', { error: 'Invalid username or password' });
    }
};
