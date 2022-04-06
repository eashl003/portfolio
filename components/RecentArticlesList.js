import Link from "next/link"
import Image from "next/image"
import NextImage from "./Image"
// throw and exeception if value doesn't exist...
const RecentArticlesList = ({ recentArticles }) => {
  return (
    <div className="bg-salmon-50 pb-10">
      <div className=" py-3">
        <h1 className="font-arimo font-bold tracking-wider mb-2 m-auto text-3xl font-medium title-font text-teal-500">
          Recent Posts
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center justify-center pb-10">
        {recentArticles.slice(0, 2).map((_recentArticle) => (
          <div key={_recentArticle.id}>
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden md:max-w-2xl mt-5 transform hover:scale-105 duration-500 ease-in-out hover:shadow-xl">
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
                    <p className="block mt-1 drop-shadow-lg font-bold leading-tight text-2xl text-teal-500 text-left hover:underline">
                      {_recentArticle.title}
                    </p>
                  </Link>
                  <Link href={`/articles/${_recentArticle.slug}`} passHref>
                    <p className="mt-2 text-black line-clamp-3 text-sm text-teal-500 text-left">
                      {_recentArticle.description}
                    </p>
                  </Link>
                  <Link href={`/articles/${_recentArticle.slug}`} passHref>
                    <p className="block mt-1 text-md font-bold leading-tight text- text-teal-500 text-left hover:underline">
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
