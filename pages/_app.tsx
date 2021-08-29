import React, { useState } from "react";
import { MDXProvider } from "@mdx-js/react";
import { range } from "fp-ts/lib/ReadonlyNonEmptyArray";
import { AppProps } from "next/app";
import styled, {
  createGlobalStyle,
  css,
  keyframes,
  ThemeProvider,
} from "styled-components";

import CodeBlock from "Components/CodeBlock";
import Layout from "Components/Layout";
import Theme from "Themes/Theme";

const GlobalStyle = createGlobalStyle`
  html, body, body > div {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: stretch;
  }

  html {
    width: 100vw;
    overflow-x: hidden;
  }

  ${({ theme }) => css`
    html {
      ${theme.cssUtils.darkScrollbar}
    }

    body {
      background-color: ${theme.colors.background};
      color: ${theme.colors.text};

      margin: ${theme.spacing(1)}px ${theme.spacing(2)}px;

      font-family: "Montserrat", sans-serif;
      font-weight: 300;
      font-size: ${theme.sizes.medium};
    }

    a {
      color: ${theme.colors.primary};
      text-decoration: none;
      cursor: pointer;
      font-weight: 500;

      &:hover {
        text-decoration: underline;
      }
    }

    h1 {
      font-weight: 500;
      font-size: ${theme.sizes.h1};
    }

    h2 {
      font-weight: 500;
      font-size: ${theme.sizes.h2};
    }

    h3 {
      font-weight: 500;
      font-size: ${theme.sizes.h3};
    }
  `}
`;

const components = {
  wrapper: (props: React.ComponentProps<typeof Layout>) =>
    props.meta === undefined ? <>{props.children}</> : <Layout {...props} />,
  pre: ({ children: { props } }: any) => <CodeBlock {...props} />,
};

const App = ({ Component, pageProps }: AppProps) => {
  const [theme] = useState(() => new Theme());

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MDXProvider components={components}>
        <NoScriptBanners />
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
};

const NoScriptBanners = () => {
  const messages = [
    "Enable JavaScript.",
    "This site works better with JavaScript.",
  ];

  return (
    <noscript style={{ pointerEvents: "none" }}>
      {messages.map((message, i) => (
        <NoScriptBanner key={i} i={i}>
          {message}
        </NoScriptBanner>
      ))}
    </noscript>
  );
};

const noScripBannerAnimation = keyframes`
  0% { top: -200% }
  100% { top: 100% }
`;

const NoScriptBanner = ({
  i,
  children,
}: {
  i: number;
  children: React.ReactNode;
}) => {
  const duration = Math.random() * 10 + 20;
  const delay = i * 10;
  const left = Math.random();
  const right = Math.random();

  return (
    <NoScriptBannerWrapper $duration={duration} $delay={delay}>
      <div style={{ flexGrow: left }} />
      <NoScriptBannerContent>{children}</NoScriptBannerContent>
      <div style={{ flexGrow: right }} />
    </NoScriptBannerWrapper>
  );
};

const NoScriptBannerWrapper = styled.div<{
  $duration: number;
  $delay: number;
}>`
  display: flex;
  position: fixed;
  width: 100%;
  z-index: 10000;
  top: -1000px;

  animation-name: ${noScripBannerAnimation};
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  ${({ theme, $duration, $delay }) => css`
    z-index: ${1000000 - Math.floor($duration * 100)};
    animation-duration: ${$duration}s;
    animation-delay: ${$delay}s;
    padding: ${theme.spacing(2)}px;
    border-radius: ${theme.spacing(1)}px;
  `}
`;

const NoScriptBannerContent = styled.div`
  background: white;
  color: black;
  font-weight: bold;
  font-size: 2rem;
  border: 1px solid #f008;
  box-shadow: 1px 1px 1px 1px black;

  ${({ theme }) => css`
    padding: ${theme.spacing(2)}px;
    border-radius: ${theme.spacing(1)}px;
  `}
`;

export default App;
