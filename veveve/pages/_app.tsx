import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import helmet from "helmet";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    helmet.frameguard({ action: "sameorigin" });
  }, []);
  return <Component {...pageProps} />;
}
