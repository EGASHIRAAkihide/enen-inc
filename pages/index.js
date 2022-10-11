import Head from "next/head";

import About from "../components/about";
import Container from "../components/container";
import Header from "../components/header/index";
import Info from "../components/info";
// import Works from '../components/works'
// import Articles from '../components/articles'
import Layout from "../components/layout";
import Member from "../components/members/index";
import { getAllPostsForHome } from "../lib/api";
import { CMS_NAME } from "../lib/constants";

import Intro from "./sections/intro";

export default function Index({ preview, allPosts }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <Header />
        <Container>
          <Intro />
          <About />
          <Member />
          <Info />
          {/* <Works /> */}
          {/* <Articles
            allPosts={allPosts}
          /> */}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? [];
  return {
    props: { preview, allPosts },
  };
}
