import React, { useState } from "react";
import { MDXProvider } from "@mdx-js/react";
import { AppProps } from "next/app";
import { createGlobalStyle, css, ThemeProvider } from "styled-components";

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
    body {
      background-color: ${theme.colors.background};
      color: ${theme.colors.text};

      margin: ${theme.spacing(1)}px ${theme.spacing(2)}px;

      font-family: "Montserrat", sans-serif;
      font-weight: 500;
    }

    a {
      color: ${theme.colors.primary};
      text-decoration: none;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }

    h1 {
      font-weight: 500;
    }
  `}
`;

const components = {
  wrapper: (props: React.ComponentProps<typeof Layout>) =>
    props.meta === undefined ? <>{props.children}</> : <Layout {...props} />,
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
