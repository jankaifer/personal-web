import Layout from "Components/Layout";
import Markdown from "Components/Markdown";
import WIP from "Components/WIP";

import markdown from "Docs/home.md";

const Home = () => {
  return (
    <Layout title="Home" home>
      <Markdown>{markdown}</Markdown>
    </Layout>
  );
};

export default Home;
