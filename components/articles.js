import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'

export default function Articles({
  allPosts,
}) {
  const morePosts = allPosts
  return (
    // TODO: APIで取得できる状態にする
    <section className="mt-16 mb-16 md:mb-12">
      <MoreStories posts={morePosts} />
    </section>
  )
}
