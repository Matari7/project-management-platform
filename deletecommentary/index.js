const express = require('express');
const sequelize = require('./db/connection');
const commentaryRoutes = require('./routes/commentaryRoutes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/commentaries', commentaryRoutes);

const PORT = process.env.PORT || 4010;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
