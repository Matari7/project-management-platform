const express = require('express');
const sequelize = require('./config/db');
const loginRoutes = require('./routes/loginRoutes');

const app = express();

app.use(express.json());
app.use('/api', loginRoutes);

// Sincronizar con la base de datos
sequelize.sync().then(() => {
    console.log('Database synchronized');
}).catch((err) => {
    console.error('Unable to synchronize the database:', err);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
