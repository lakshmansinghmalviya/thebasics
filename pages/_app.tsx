import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [pageTitle, setPageTitle] = useState("TheBasics - Home");

  useEffect(() => {
    const componentName = Component.displayName || Component.name || "Page";
    setPageTitle(componentName);
  }, [Component]);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
