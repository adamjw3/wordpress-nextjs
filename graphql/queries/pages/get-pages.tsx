import { gql } from "@apollo/client";

export const GET_PAGES = gql`
  query Get_Pages {
    pages {
      nodes {
        blocks {
          attributesJSON
          name
          order
        }
      }
    }
  }
`;
