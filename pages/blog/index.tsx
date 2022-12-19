import { GetStaticProps } from "next";
import Link from "next/link";

import Layout from "Components/Layout";
import { getBlogs } from "Utils/static";

export const meta = {
  title: "Blog",
};

type Props = {
  posts: TPost[];
};

const Post = ({ post }: { post: TPost }) => {
  return (
    <Link href={`/blog/post/${post.tag}`}>
      <h3>{post.title}</h3>
    </Link>
  );
};

const BlogHome = ({ posts }: Props) => (
  <Layout meta={meta}>
    <h1>Welcome to my blog</h1>
    {posts.map((post, i) => (
      <Post key={i} post={post} />
    ))}
  </Layout>
);

export const getStaticProps: GetStaticProps<Props> = async (_) => {
  return {
    props: {
      posts: getBlogs(),
    },
  };
};

export default BlogHome;
