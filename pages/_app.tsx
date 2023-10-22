import "../theme/notion-react-x.css";
import "../theme/prismjs/prism-coy.css";
import "katex/dist/katex.min.css";

import "../styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  );
}

export default MyApp;
