import NextImage from "./Image"
import Link from "next/link"
import Image from "next/image"

const ArticlesList = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 items-center justify-center mt-10 ml-10 mr-10">
      {articles.map((_article) => (
        <div key={_article.id}>
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl my-5 transform translate-y-1 hover:translate-y-3 duration-500 ease-in-out">
            <div className="md:flex">
              <div className="items-stretch">
                <div className="h-48 w-48 relative">
                  <Image
                    src={_article.image[0].url}
                    alt="Picture of the author"
                    layout="fill"
                    objectFit="cover"
                    className="object-left"
                  />
                </div>
              </div>
              <div className="p-8">
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight font-medium text-black"
                >
                  {_article.title}
                </a>
                <p className="mt-2 text-sm text-gray-500 line-clamp-4">
                  {_article.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ArticlesList
