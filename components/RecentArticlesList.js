import Link from "next/link"
import Image from "next/image"
import NextImage from "./Image"

const RecentArticlesList = ({ recentArticles }) => {
  return (
    <div className="grid md:grid-cols-3 ml-8">
      {recentArticles.slice(0, 3).map((_recentArticle) => (
        <div
          key={_recentArticle.id}
          className="max-w-sm rounded text-ellipsis overflow-hidden shadow-xl transform hover:translate-y-1 transition-all duration-200"
        >
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{_recentArticle.title}</div>
            <p className="text-gray-700 text-base line-clamp-4">
              {_recentArticle.description}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              Continue reading
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RecentArticlesList
