import dayjs from "dayjs";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import Layout from "Components/Layout";
import { assert } from "Utils/guards";
import { getAllPostIds, getPostContent, getPostData } from "Utils/posts";

type Props = {
  postData: ReturnType<typeof getPostData>;
  postContent: Awaited<ReturnType<typeof getPostContent>>;
};

type Params = {
  id: string;
};

const Post = ({ postData, postContent }: Props) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      {dayjs(postData.date, "MM-DD-YYYY").format("DD/MM/YYYY")}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postContent }} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths<Params> = async () => ({
  paths: getAllPostIds().map((id) => ({ params: { id } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  assert(params !== undefined, "Missing params");
  const { id } = params;

  return {
    props: {
      postData: getPostData(id),
      postContent: await getPostContent(id),
    },
  };
};

export default Post;
