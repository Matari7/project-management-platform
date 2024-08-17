const { ApolloClient, InMemoryCache, HttpLink } = require('@apollo/client');

// Configure the Apollo Client
const client = new ApolloClient({
    link: new HttpLink({
        // URI of GraphQL server
        uri: `${process.env.REACT_APP_API_URL}:4008/graphql`,
    }),
    cache: new InMemoryCache(), // Configure the memory cache
});

module.exports = client;
