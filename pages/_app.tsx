import { AppProps } from "next/app";

import "Styles/global.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
