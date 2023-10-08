import "../theme/notion-react-x.css";
import "../theme/prismjs/prism-coy.css";
import "katex/dist/katex.min.css";

import "../styles/globals.css";
import "../src/components/customCursor/DotRing.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

const MouseContextProvider = dynamic(
  () => import("../src/components/customCursor/mouse-context"),
  { ssr: false }
);
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MouseContextProvider>
      <Component {...pageProps} />
    </MouseContextProvider>
  );
}

export default MyApp;
