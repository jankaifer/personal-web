import Layout from "Components/Layout";
import WIP from "Components/WIP";
import Markdown from "Components/Markdown";

import markdown from "Docs/home.md";

const Home = () => {
  return (
    <Layout title="Home" home>
      <Markdown>{markdown}</Markdown>
      <WIP />
    </Layout>
  );
};

export default Home;
