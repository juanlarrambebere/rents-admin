import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { ReactNode } from "react";

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_HASURA_HTTP_ENDPOINT,
    }),
    cache: new InMemoryCache(),
  });
};

const client = createApolloClient();

type ApolloProps = {
  children: ReactNode;
};

const Apollo = ({ children }: ApolloProps) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Apollo;
