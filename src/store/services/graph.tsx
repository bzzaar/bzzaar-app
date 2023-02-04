import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPH_ENDPOINT as string,
  cache: new InMemoryCache(),
});

export const getPrices = gql`
  {
    ethPrices(first: 5) {
      price
    }
    daiPrices(first: 5) {
      price
    }
  }
`;

export const getEthPrice = gql`
  {
    ethPrices(first: 5) {
      price
    }
  }
`;
export const getDaiPrice = gql`
  {
    daiPrices(first: 5) {
      price
    }
  }
`;
