import { gql } from "@apollo/client";

export const GET_PAGE_BY_ID = gql`
  query PageQuery($id: ID!) {
    page(id: $id, idType: DATABASE_ID) {
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
