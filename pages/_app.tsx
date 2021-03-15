import { useState } from "react";
import { AppProps } from "next/app";
import { createGlobalStyle, css, ThemeProvider } from "styled-components";

import Theme from "Themes/Theme";

const GlobalStyle = createGlobalStyle`
  html, body, body > div {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: stretch;
  }

  ${({ theme }) => css`
    body {
      background-color: ${theme.colors.background};
      color: ${theme.colors.text};

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

const App = ({ Component, pageProps }: AppProps) => {
  const [theme] = useState(() => new Theme());

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
