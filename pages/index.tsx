import Head from "next/head";

import Layout from "Components/Layout";
import WIP from "Components/WIP";

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>Home</title>
      </Head>
      <WIP />
    </Layout>
  );
};

export default Home;
