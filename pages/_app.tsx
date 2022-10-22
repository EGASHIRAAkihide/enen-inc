import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ENEN inc</title>
        <meta name="description" content="This is ENEN-inc website." />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
