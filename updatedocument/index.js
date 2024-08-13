const express = require('express');
const documentRoutes = require('./routes/documentRoutes');
const cors = require('cors');
const app = express();
require('dotenv').config();
require('./db/connection');

app.use(cors());
app.use(express.json());
app.use('/api/documents', documentRoutes);

const PORT = process.env.PORT || 4015;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});