import Link from "next/link"
import Image from "next/image"
import RecentArticlesList from "./RecentArticlesList"

const Hero = ({ recentArticles, home }) => {
  return (
    <div className="bg-salmon-200">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-salmon-50 font-arimo">
            {home.heading}
          </h1>
          <p className="mb-8 leading-relaxed text-salmon-50">
            {home.introduction}
          </p>
          <div className="flex justify-center">
            <Link href="/blog" passHref>
              <button className="inline-flex text-white bg-salmon-400 border-0 py-2 px-6 focus:outline-none rounded text-lg">
                Blog
              </button>
            </Link>
            <Link href="/shop" passHref>
              <button className="ml-4 inline-flex text-salmon-400 bg-salmon-50 border-0 py-2 px-6 focus:outline-none rounded text-lg">
                Projects
              </button>
            </Link>
          </div>
        </div>
        <div className="-mt-8 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="rounded"
            alt="article"
            src="https://res.cloudinary.com/dj3qdir59/image/upload/v1642443909/altumcode-mCj7UinqOYQ-unsplash_ycf0uu.jpg"
            height="700"
            width="520"
          />
        </div>
      </div>
      <section className="text-gray-700 body-font bg-salmon-100">
        <div className="flex flex-col text-center w-full font-arimo">
          <h1
            id="recent-post-title"
            className="mb-6 text-4xl text-2xl font-medium title-font text-salmon-50"
          >
            Recent Posts
          </h1>
          <RecentArticlesList recentArticles={recentArticles} />
        </div>
      </section>

      <div className="container px-5 py-24 mx-auto text-salmon-50 font-arimo">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="text-2xl font-medium title-font mb-2">{home.quote}</h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-sm">
            -Kathleen Neagle Sokolowski test
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
