const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schemas/projectSchema');
const resolvers = require('./resolvers/projectResolver');
const sequelize = require('./config/db');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
}));

const PORT = process.env.PORT || 4008;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}).catch(err => console.log('Error: ' + err));
