import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

import Layout from "Components/Layout";
import { getSortedPostsData } from "Lib/posts";
import utilStyles from "Styles/utils.module.scss";

type Props = {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
};

const Home = ({ allPostsData }: Props) => {
  return (
    <Layout home>
      <Head>
        <title>Home</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <Link href="posts/first-post">
          <a>firs post</a>
        </Link>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
};

export default Home;
