import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.WORDPRESS_GRAPHQL,
  cache: new InMemoryCache(),
});

export default client;
