import Link from "next/link"
import Image from "next/image"

const RecentArticlesList = ({ recentArticles }) => {
  return (
    <div className="mt-6 mb-8 ml-6 grid md:grid-cols-3">
      {recentArticles.slice(0, 3).map((_recentArticle) => (
        <div key={_recentArticle.id} className="grid mr-12">
          <div className="rounded overflow-hidden shadow-lg flex flex-col mb-8">
            <Link href="#" passHref>
              <Image
                src={_recentArticle.image}
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </Link>
            <div className="px-6 py-4 mb-auto">
              <div className="mb-3">
                <Link
                  href="#"
                  passHref
                  className="text-xs font-bold category-name"
                >
                  {_recentArticle.category_name}
                </Link>
              </div>
              <Link
                href="#"
                passHref
                className="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2"
              >
                {_recentArticle.title}
              </Link>
              <p id="article-descr" className="text-gray-500 text-sm">
                {_recentArticle.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RecentArticlesList
