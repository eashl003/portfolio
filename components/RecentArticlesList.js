import Link from "next/link"
import Image from "next/image"

const RecentArticlesList = ({ recentArticles }) => {
  return (
    <div className="md:flex space-x-6 justify-center">
      {recentArticles.slice(0, 3).map((_recentArticle) => (
        <div
          key={_recentArticle.id}
          className="md:shrink-0 max-w-sm rounded-2xl text-ellipsis overflow-hidden shadow-xl transform hover:translate-y-1 transition-all duration-200"
        >
          <Link href={`/articles/${_recentArticle.slug}`} passHref>
            <Image
              alt="article"
              src={_recentArticle.image[0].url}
              width={1000}
              height={700}
            />
          </Link>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{_recentArticle.title}</div>
            <p className="text-gray-700 text-base line-clamp-4">
              {_recentArticle.description}
            </p>
          </div>
          <Link href={`/articles/${_recentArticle.slug}`} passHref>
            <div className="px-6 pt-1 pb-2 mb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-600 hover:text-gray-900">
                Continue reading
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default RecentArticlesList
