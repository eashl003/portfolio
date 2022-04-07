import Link from "next/link"
import Image from "next/image"
import NextImage from "./Image"
// throw and exeception if value doesn't exist...
const RecentArticlesList = ({ recentArticles }) => {
  return (
    <div>
      <div>
        <h1 className="flex justify-center items-center text-3xl  font-medium text-stone-50 font-arimo">
          Latest Post
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 items-center justify-center pb-10">
        {recentArticles.slice(0, 1).map((_recentArticle) => (
          <div key={_recentArticle.id}>
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-2xl overflow-hidden md:max-w-2xl mt-5 transform hover:scale-105 duration-500 ease-in-out hover:shadow-xl">
              <div className="md:flex">
                {/* <div className="md:flex-shrink-0 -mb-4">
                  <Link href={`/articles/${_recentArticle.slug}`} passHref>
                    <Image
                      alt="article"
                      src={_recentArticle.image[0].url}
                      width={250}
                      height={200}
                    />
                  </Link>
                </div> */}
                <div className="p-8 leading-8">
                  <Link href={`/articles/${_recentArticle.slug}`} passHref>
                    <p className="block mt-1 drop-shadow-lg font-bold leading-tight text-2xl text-teal-500 text-left">
                      {_recentArticle.title}
                    </p>
                  </Link>
                  <Link href={`/articles/${_recentArticle.slug}`} passHref>
                    <p className="mt-2 text-black line-clamp-3 text-sm text-teal-500 text-left">
                      {_recentArticle.description}
                    </p>
                  </Link>
                  <Link href={`/articles/${_recentArticle.slug}`} passHref>
                    <p className="block mt-1 text-md font-bold leading-tight text- text-teal-500 text-left underline">
                      Continue Reading
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
  )
}

export default RecentArticlesList
