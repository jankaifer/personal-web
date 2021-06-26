// import { MarkdownProvider } from "next/mdx";

import Image from "next/image";

import Layout from "Components/Layout";
import Markdown from "Components/Markdown";
import markdown from "Docs/home.md";
import { getGravatarSrc } from "Utils/misc";

const Home = () => {
  return (
    <Layout title="Home" home>
      <Markdown>{markdown}</Markdown>
      <Image src={getGravatarSrc("jan@kaifer.cz")} width={100} height={100} />
    </Layout>
  );
};

export default Home;
