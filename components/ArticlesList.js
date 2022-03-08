import Link from "next/link"
import Image from "next/image"
import SearchBar from "./SearchBar"

const ArticlesList = ({ articles }) => {
  return (
    <div>
      <div>
        <SearchBar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center mt-10 ml-10 mr-10">
        {articles.map((_article) => (
          <div key={_article.id}>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl my-5 transform translate-y-1 hover:translate-y-3 duration-500 ease-in-out">
              <div className="md:flex">
                <div className="items-stretch">
                  <div className="h-48 w-48 relative">
                    <Link href={`/articles/${_article.slug}`} passHref>
                      <Image
                        src={_article.image[0].url}
                        alt="Picture of the author"
                        layout="fill"
                        objectFit="cover"
                        className="object-left"
                      />
                    </Link>
                  </div>
                </div>
                <div className="p-8">
                  <Link href={`/articles/${_article.slug}`} passHref>
                    {_article.title}
                  </Link>
                  <Link href={`/articles/${_article.slug}`} passHref>
                    <p className="mt-2 text-sm text-gray-500 line-clamp-4">
                      {_article.description}
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

export default ArticlesList
