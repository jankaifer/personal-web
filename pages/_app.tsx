import { useState } from "react";
import { AppProps } from "next/app";
import { createGlobalStyle, css, ThemeProvider } from "styled-components";

import Theme from "Themes/Theme";

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    body {
      background-color: ${theme.colors.background};
      color: ${theme.colors.text};

      font-family: "Montserrat", sans-serif;
    }

    a {
      color: ${theme.colors.primary};
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
