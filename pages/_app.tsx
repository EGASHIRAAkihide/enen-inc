import type { AppProps } from "next/app";
import Head from "next/head";
import Container from "@mui/material/Container";
import "../styles/reset.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ENEN inc</title>
        <meta name="description" content="This is ENEN-inc website." />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <Container maxWidth="md">
          <Component {...pageProps} />
        </Container>
      </main>

      <footer>footer</footer>
    </>
  );
}

export default MyApp;
