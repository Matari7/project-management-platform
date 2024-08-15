const express = require('express');
const app = express();
const cors = require('cors');
const userRoutes = require('./src/routes/userRoutes');
require('dotenv').config();
require('./config/db');


app.use(cors());

app.use(express.json());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 4002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
