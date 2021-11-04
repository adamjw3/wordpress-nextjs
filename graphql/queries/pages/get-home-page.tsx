import { gql } from "@apollo/client";

export const GET_HOME_PAGE = gql`
  query Get_Home_PAGE {
    page(id: "homepage", idType: URI) {
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
