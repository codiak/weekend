import ApolloClient from "apollo-boost";

export const client = new ApolloClient({
  uri: "http://ec2-52-86-111-85.compute-1.amazonaws.com:8080/v1/graphql",
  headers: {
    "x-hasura-admin-secret": process.env.X_HASURA_ADMIN_SECRET,
  },
});
