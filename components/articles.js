import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'

export default function About({
  allPosts,
}) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    // TODO: APIで取得できる状態にする
    <section className="mt-16 mb-16 md:mb-12">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tighter leading-tight">
        Articles(Works?)
      </h2>
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
    </section>
  )
}
