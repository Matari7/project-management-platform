const express = require('express');
const projectRoutes = require('./routes/projectRoutes');
const cors = require('cors');
const app = express();
require('dotenv').config();
require('./config/db');

app.use(cors());
app.use(express.json());
app.use('/api/projects', projectRoutes);

const PORT = process.env.PORT || 4007;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
