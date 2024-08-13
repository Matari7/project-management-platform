const express = require('express');
const cors = require('cors');
const commentaryRoutes = require('./routes/commentaryRoutes');
const app = express();

require('dotenv').config();
require('./db/connection');
app.use(cors());
app.use(express.json());
app.use('/api/commentaries', commentaryRoutes);

const PORT = process.env.PORT || 4012;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
