const express = require('express');
const app = express();
const userRoutes = require('./src/routes/userRoutes');
const cors = require('cors');


app.use(cors());

require('dotenv').config();
require('./config/db');

app.use(express.json());
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 4003;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
