const express = require('express');
const cors = require('cors'); 
const app = express();


app.use(cors());

app.use(express.json());

const userRoutes = require('./src/routes/userRoutes');
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
