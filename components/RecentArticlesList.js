import Link from "next/link"
import Image from "next/image"
import NextImage from "./Image"
// throw and exeception if value doesn't exist...
const RecentArticlesList = ({ recentArticles }) => {
  return (
    <div className="bg-white pb-10">
      <h1
        id="recent-post-title"
        className="mb-2 text-4xl text-2xl font-medium title-font text-teal-500 pt-10"
      >
        Recent Posts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center pb-10">
        {recentArticles.slice(0, 2).map((_recentArticle) => (
          <div key={_recentArticle.id}>
            <div className="max-w-md mx-auto bg-white rounded shadow-lg overflow-hidden md:max-w-2xl mt-5 transform hover:scale-105 duration-500 ease-in-out">
              <div className="md:flex">
                <div className="md:flex-shrink-0 -mb-4">
                  <Link href={`/articles/${_recentArticle.slug}`} passHref>
                    <Image
                      alt="article"
                      src={_recentArticle.image[0].url}
                      width={300}
                      height={250}
                    />
                  </Link>
                </div>
                <div className="p-8 leading-8 ">
                  <Link href={`/articles/${_recentArticle.slug}`} passHref>
                    <p className="block mt-1 text-xl font-bold leading-tight font-medium text-black text-left hover:underline">
                      {_recentArticle.title}
                    </p>
                  </Link>
                  <p className="mt-2 text-gray-900 line-clamp-3 text-left">
                    {_recentArticle.description}
                  </p>
                  <Link href={`/articles/${_recentArticle.slug}`} passHref>
                    <p className="block mt-1 text-lg  font-bold leading-tight font-medium text-black text-left underline">
                      Continue Reading
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentArticlesList
