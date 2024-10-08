const { buildSchema } = require('graphql');

// Define GraphQL schema
const schema = buildSchema(`
    type Project {
        id: ID!
        name: String!
        description: String!
        user_id: Int!
    }

    type Query {
        getProjects: [Project]
        getProject(id: ID!): Project
    }
`);

module.exports = schema;
