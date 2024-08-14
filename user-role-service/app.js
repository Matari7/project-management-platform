const express = require('express');
const { mongoDBConnection, sequelize } = require('./config/db');
const roleRoutes = require('./routes/roleRoutes');
require('dotenv').config();
const cors = require('cors'); 

const app = express();
app.use(cors());

app.use(express.json());

mongoDBConnection();

sequelize.authenticate()
    .then(() => console.log('Connected to MySQL Database'))
    .catch(err => console.error('Unable to connect to MySQL Database:', err));

app.use('/api', roleRoutes);

const PORT = process.env.PORT || 4023;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
