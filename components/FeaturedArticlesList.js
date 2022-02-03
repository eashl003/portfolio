import NextImage from "./Image"
import Link from "next/link"

const FeaturedArticlesList = ({ featuredArticles }) => {
  return (
    <section className="text-gray-700">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden"></div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          {featuredArticles.slice(0, 3).map((_featuredArticle) => (
            <div
              key={_featuredArticle.id}
              className="flex flex-col mb-10 lg:items-start items-center"
            >
              <div
                id="code-icon"
                className="w-12 h-12 inline-flex items-center justify-center rounded-full text-teal-900 mb-5"
              >
                <i className="fas fa-code"></i>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  {_featuredArticle.title}{" "}
                </h2>
                <p className="leading-relaxed text-base">
                  {_featuredArticle.description}
                </p>
                <a className="mt-3 text-teal-900 inline-flex items-center">
                  Continue Reading
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedArticlesList
