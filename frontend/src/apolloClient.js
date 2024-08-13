const { ApolloClient, InMemoryCache, HttpLink } = require('@apollo/client');

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'http://localhost:4008/graphql',
    }),
    cache: new InMemoryCache(),
});

module.exports = client;
