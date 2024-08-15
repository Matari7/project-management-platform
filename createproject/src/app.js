const express = require('express');
const projectRoutes = require('./routes/projectRoutes');
require('dotenv').config();
const cors = require('cors');
require('./config/db');
const app = express();


app.use(cors());


app.use(express.json());

app.use('/api/projects', projectRoutes);

const PORT = process.env.PORT || 4005;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
