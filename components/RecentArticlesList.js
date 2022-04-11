import Link from "next/link"
import Image from "next/image"
import NextImage from "./Image"
// throw and exeception if value doesn't exist...
const RecentArticlesList = ({ recentArticles }) => {
  return (
    <div className="">
      <div>
        <h1 className="flex justify-center items-center text-2xl  font-medium font-gravitas text-5xl pt-20 text-gray-900">
          Recent Posts
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-y-16 items-center justify-center mt-10 absolute m-auto left-0 right-0">
        {recentArticles.slice(0, 2).map((_recentArticle) => (
          <div key={_recentArticle.id}>
            <div className="max-w-md mx-auto bg-transparent rounded shadow-md overflow-hidden md:max-w-6xl transform hover:scale-105 duration-500 ease-in-out hover:shadow-xl">
              <div className="md:flex">
                <div className="md:flex-shrink-0 -mb-4">
                  <Link href={`/articles/${_recentArticle.slug}`} passHref>
                    <Image
                      alt="article"
                      src={_recentArticle.image[0].url}
                      width={350}
                      height={350}
                    />
                  </Link>
                </div>
                <div className="p-4 ">
                  <Link href={`/articles/${_recentArticle.slug}`} passHref>
                    <p className="block mt-1 font-bold leading-10 text-2xl text-gray-900 text-left">
                      {_recentArticle.title}
                    </p>
                  </Link>
                  <Link href={`/articles/${_recentArticle.slug}`} passHref>
                    <p className="mt-2 text-black line-clamp-5  leading-10 text-sm text-gray-900 text-left text-lg">
                      {_recentArticle.description}
                    </p>
                  </Link>
                  <Link href={`/articles/${_recentArticle.slug}`} passHref>
                    <p className="block mt-1 text-md font-bold leading-8 text- text-gray-900 text-left underline">
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
