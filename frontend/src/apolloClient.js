const { ApolloClient, InMemoryCache, HttpLink } = require('@apollo/client');

const client = new ApolloClient({
    link: new HttpLink({
        uri: `${process.env.REACT_APP_API_URL}:4008/graphql`,
    }),
    cache: new InMemoryCache(),
});

module.exports = client;
