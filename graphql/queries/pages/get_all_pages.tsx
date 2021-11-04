import { gql } from "@apollo/client";

export const GET_All_PAGES = gql`
  query Get_ALL_Pages {
    pages {
      nodes {
        slug
      }
    }
  }
`;
