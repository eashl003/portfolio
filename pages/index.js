import Hero from "../components/Hero"
import { getRecentArticles, getHome } from "../utils/api"

const HomePage = ({ recentArticles, home }) => {
  return (
    <div>
      <Hero home={home} recentArticles={recentArticles} />
    </div>
  )
}

export async function getStaticProps() {
  const recentArticles = await getRecentArticles()
  const home = await getHome()

  return { props: { recentArticles, home } }
}

export default HomePage
