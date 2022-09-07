import Container from '../components/container'
import Intro from '../components/intro'
import About from '../components/about'
import Member from '../components/member'
import Works from '../components/works'
import Articles from '../components/articles'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function Index({ preview, allPosts }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          <About />
          <Member />
          <Works />
          <Articles
            allPosts={allPosts}
          />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? []
  return {
    props: { preview, allPosts },
  }
}
