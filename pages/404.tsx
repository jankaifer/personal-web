import styled from "styled-components";

import Layout from "Components/Layout";
import Link from "next/link";

const H1 = styled.h1`
  text-align: center;
`;

const XKCDLinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
`;

const Error404 = () => {
  return (
    <Layout
      meta={{
        title: "Not Found",
      }}
    >
      <H1>Content is not available in your country</H1>
      <XKCDLinkWrapper>
        <Link href="https://xkcd.com/1969/">
          -- Stolen from <b>xkcd</b>
        </Link>
      </XKCDLinkWrapper>
    </Layout>
  );
};

export default Error404;
