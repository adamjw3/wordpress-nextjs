import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import client from "../apollo-client";
import { Layout } from "../components/Common/Layout";
import { useBlocks } from "../hooks/useBlocks";
import { GET_PAGE_BY_SLUG } from "../graphql/queries/pages/get_page_by_slug";
import { GET_All_PAGES } from "../graphql/queries/pages/get_all_pages";

const Page = ({ data, menu }) => {
  if (!data) {
    return;
  }
  const blocks = useBlocks(data.blocks);

  return (
    <Layout menuItems={menu}>
      <h1>{data.title}</h1>
      {blocks}
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: GET_All_PAGES,
  });

  const paths = data.pages.nodes.map((page) => ({
    params: { slug: page.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await client.query({
    query: GET_PAGE_BY_SLUG,
    variables: { slug: params.slug },
  });

  return {
    props: {
      data: data.page,
      menu: data.menuItems.edges,
    },
  };
};

export default Page;
