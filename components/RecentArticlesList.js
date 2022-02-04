import Link from "next/link"
import ImageDetail from "./ImageDetail"
import { buildUrl } from "cloudinary-build-url"
import Image from "next/image"

const url = buildUrl("213497931225767:POrrqMG3u2wVl3gzfn4D7C7BJxg@dj3qdir59", {
  cloud: {
    cloudName: "dj3qdir59",
  },
  transformations: {
    effect: {
      name: "pixelate",
      value: 40,
    },
  },
})

const RecentArticlesList = ({ recentArticles }) => {
  return (
    <div className="flex space-x-12 justify-center  ">
      {recentArticles.slice(0, 3).map((_recentArticle) => (
        <div
          key={_recentArticle.id}
          className="max-w-sm rounded-2xl text-ellipsis overflow-hidden shadow-xl transform hover:translate-y-1 transition-all duration-200"
        >
          <div className="px-6 py-4">
            <div className="rounded-t-lg pt-2 pb-2 w-1/2 mx-auto">
              {/*<img
                src={_recentArticle.image.url}
                alt="test"
              /> */}
              <Image
                src="/dj3qdir59/image/upload/v1642446846/morning-journal.jpg"
                alt="test"
                width={1000}
                height={750}
              />
            </div>
            <div className="font-bold text-xl mb-2">{_recentArticle.title}</div>
            <p className="text-gray-700 text-base line-clamp-4">
              {_recentArticle.description}
            </p>
          </div>
          <Link href={`/articles/${_recentArticle.slug}`}>
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
