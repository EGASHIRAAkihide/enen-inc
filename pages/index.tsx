import type { NextPage } from 'next'
import { NextHead } from '../components/head'
import { Header } from '../components/header'

const Home: NextPage = () => {
  return (
    <div>
      <NextHead />
      <Header />
      homepage
    </div>
  )
}

export default Home
