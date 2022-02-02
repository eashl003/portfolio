import ArticlesList from "../components/ArticlesList"
import { getArticles } from "../utils/api"

const BlogPage = ({ articles }) => {
  return (
    <div>
      <ArticlesList articles={articles} />
    </div>
  )
}

export async function getStaticProps() {
  const articles = await getArticles()
  return { props: { articles } }
}

export default BlogPage
