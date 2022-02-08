import { useRouter } from "next/router"
import { getArticles, getArticle } from "../../utils/api"
import Image from "next/image"
import Link from "next/link"
import ReactMarkdown from "react-markdown"

const ArticlePage = ({ article }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading article...</div>
  }

  return (
    <div>
      <div title="All posts" className="">
        <Link href="/blog" passHref>
          <i className="fas fa-arrow-alt-circle-left fa-2x mt-10 ml-10 text-teal-700 transition transform hover:-translate-x-2"></i>
        </Link>
      </div>
      <div className="w-7/12 mx-auto -mt-12 flex flex-col justify-between capitalize">
        <h1 className="text-center text-2xl mb-8">{article.title}</h1>
        <ReactMarkdown source={article.content} escapeHtml={false} />
      </div>
    </div>
  )
}

export default ArticlePage

export async function getStaticProps({ params }) {
  const article = await getArticle(params.slug)
  return { props: { article } }
}

export async function getStaticPaths() {
  const articles = await getArticles()
  return {
    paths: articles.map((_article) => {
      return {
        params: { slug: _article.slug },
      }
    }),
    fallback: true,
  }
}
