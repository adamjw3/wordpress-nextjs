import { gql } from "@apollo/client";

export const GET_USER = gql`
  query PageQuery {
    viewer {
      username
      roles {
        nodes {
          displayName
        }
      }
    }
  }
`;
