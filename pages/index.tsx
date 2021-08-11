import Link from "next/link";
import styled, { css } from "styled-components";

import Layout from "Components/Layout";
import MyAvatar from "Components/MyAvatar";
import MyEmail from "Components/MyEmail";
import MyName from "Components/MyName";
import config from "Config";

export const meta = {
  isHome: true,
  title: "Home",
};

const Home = () => {
  return (
    <Layout meta={meta}>
      <Wrapper>
        <ImageWrapper>
          <MyAvatar size={160} round priority />
        </ImageWrapper>
        <TextWrapper>
          <p>
            My name is <MyName />. I am a student, programmer, problem solver,
            and gamer.
          </p>

          <p>
            Interesting projects and ideas are always welcome. Drop me a message
            at <MyEmail />.
          </p>

          <p>
            Other stuff you might be looking for:{" "}
            <a href={config.values.cvUrl}>CV</a>,{" "}
            <Link href="/projects">
              <a href="/projects">projects</a>
            </Link>{" "}
            or{" "}
            <Link href="/todo-list">
              <a href="/todo-list">TODO list</a>
            </Link>
          </p>
        </TextWrapper>
      </Wrapper>
    </Layout>
  );
};

const TextWrapper = styled.div``;

const ImageWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: flex-start;

  ${({ theme }) =>
    theme.breakpoints.onBreakpoint(
      "sm",
      css`
        margin: ${theme.spacing(2)}px;
      `,
      css`
        margin: ${theme.spacing(4)}px 0;
        padding-right: ${theme.spacing(6)}px;
      `
    )}
`;

const Wrapper = styled.div`
  display: flex;

  ${({ theme }) =>
    theme.breakpoints.onBreakpoint(
      "sm",
      css`
        flex-direction: column;
      `,
      css`
        flex-direction: row;
      `
    )}
`;

export default Home;
