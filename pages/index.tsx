import Head from "next/head";

import Layout from "Components/Layout";
import WIP from "Components/WIP";
import values from "Configs/values";

const Home = () => {
  return (
    <Layout title="Home" home>
      <WIP />
    </Layout>
  );
};

export default Home;
