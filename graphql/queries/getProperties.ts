import { gql } from "@apollo/client";
import { Raw } from "types";

export type GetPropertiesData = Raw.Property[];

export const GET_PROPERTIES = gql`
  query GetProperties {
    properties {
      id
      address
      is_rented
      municipal_registry
    }
  }
`;
