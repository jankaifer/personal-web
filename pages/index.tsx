import styled, { css } from "styled-components";

import Layout from "Components/Layout";
import MyAvatar from "Components/MyAvatar";
import MyEmail from "Components/MyEmail";
import MyName from "Components/MyName";

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
            Hey, my name is <MyName />.
          </p>

          <p>
            I&apos;m currently pursuing my Bachelor&apos;s degree in computer
            science at <a href="https://cuni.cz/">Charles University</a>.
          </p>

          <p>
            Unordered list of things that I find interesting:{" "}
            <a href="https://reactjs.org/">react</a>,{" "}
            <a href="https://en.wikipedia.org/wiki/Functional_programming">
              functional programming
            </a>
            ,{" "}
            <a href="https://en.wikipedia.org/wiki/Test-driven_development">
              test driven development
            </a>
            , <a href="https://nixos.org/">nix</a>.
          </p>

          <p>
            Get in touch at <MyEmail />
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
