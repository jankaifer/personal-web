import { GetStaticProps } from "next";

import PostList from "Components/Blog/PostList";
import Layout from "Components/Layout";
import { getBlogs } from "Utils/static";

export const meta = {
  title: "Blog",
};

type Props = {
  posts: TPost[];
};

const BlogHome = ({ posts }: Props) => {
  return (
    <Layout meta={meta}>
      <h1>Welcome to my blog</h1>
      <PostList posts={posts} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async (_) => {
  return {
    props: {
      posts: getBlogs(),
    },
  };
};

export default BlogHome;
