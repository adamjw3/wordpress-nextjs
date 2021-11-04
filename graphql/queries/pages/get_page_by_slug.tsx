import { gql } from "@apollo/client";

export const GET_PAGE_BY_SLUG = gql`
  query PageQuery($slug: ID!) {
    page(id: $slug, idType: URI) {
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
