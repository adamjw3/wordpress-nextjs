import client from "../../apollo-client";
import { GET_PAGE_BY_ID } from "../../graphql/queries/pages/get_page_by_id";
import { GET_POST_BY_ID } from "../../graphql/queries/posts/get_post_by_id";
import { Layout } from "../../components/Common/Layout";
import { useBlocks } from "../../hooks/useBlocks";

const PagePreview = ({ data, menu }) => {
  const blocks = useBlocks(data.blocks);

  return (
    <Layout menuItems={menu}>
      <h1>{data.title}</h1>
      {blocks}
    </Layout>
  );
};

export default PagePreview;

export async function getServerSideProps(context) {
  const { params, query } = context;

  const getPreviewType =
    query.postType === "page" ? GET_PAGE_BY_ID : GET_POST_BY_ID;

  const { data } = await client.query({
    query: getPreviewType,
    variables: { id: params.id },
    context: {
      headers: {
        authorization: `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`,
      },
    },
  });

  const pageData = data.page ? data.page : data.post;

  console.log("pageData", pageData);

  return {
    props: {
      data: pageData,
      menu: data.menuItems.edges,
    },
  };
}
