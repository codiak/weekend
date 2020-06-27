import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import fetch from "node-fetch";

export const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri:
        process.env.HASURA_URL ||
        "http://ec2-52-86-111-85.compute-1.amazonaws.com:8080/v1/graphql",
      credentials: "same-origin",
      headers: {
        "x-hasura-admin-secret": process.env.X_HASURA_ADMIN_SECRET,
      },
      fetch: fetch,
    }),
  ]),
  cache: new InMemoryCache(),
});
