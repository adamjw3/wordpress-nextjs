import { gql } from "@apollo/client";

export const GET_POST_BY_ID = gql`
  query PostQuery($id: ID!) {
    post(id: $id, idType: DATABASE_ID) {
      title
      blocks {
        attributesJSON
        name
        order
      }
    }
    menuItems(where: { location: HCMS_MENU_HEADER }) {
      edges {
        node {
          id
          label
          path
          url
          childItems {
            edges {
              node {
                id
                label
                path
                url
              }
            }
          }
        }
      }
    }
  }
`;
