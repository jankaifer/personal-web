import React, { useState } from "react";
import { MDXProvider } from "@mdx-js/react";
import { AppProps } from "next/app";
import { createGlobalStyle, css, ThemeProvider } from "styled-components";

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
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
};

export default App;
