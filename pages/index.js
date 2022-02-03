import { getProducts } from "../utils/api"
import Link from "next/link"
import Image from "next/image"
import AboutMenu from "../components/AboutMenu"
import RecentArticlesList from "../components/RecentArticlesList"
import FeaturedArticlesList from "../components/FeaturedArticlesList"
import { getFeaturedArticles, getRecentArticles } from "../utils/api"

const HomePage = ({ products, recentArticles, featuredArticles }) => {
  return (
    <div>
      <section id="top-section" className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Hi, I&apos;m Elisabeth!
              <br className="hidden lg:inline-block" />
              <p>Lorem ipsum dolor</p>
            </h1>
            <p className="mb-8 leading-relaxed">
              Elit eget gravida cum sociis. Semper risus in hendrerit gravida
              rutrum quisque non tellus. Mauris rhoncus aenean vel elit
              scelerisque mauris. Porta lorem mollis aliquam ut porttitor leo a
              diam. Sed faucibus turpis in eu. Id interdum velit laoreet id.
            </p>
            <div className="flex justify-center">
              <Link href="/blog" passHref>
                <button className="inline-flex text-white bg-teal-900 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-400 rounded text-lg">
                  Blog
                </button>
              </Link>
              <Link href="/shop" passHref>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                  Shop
                </button>
              </Link>
            </div>
          </div>
          <div className="-mt-8 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <AboutMenu />
          </div>
        </div>
      </section>
      <div className="flex flex-col text-center w-full">
        <h1
          id="recent-post-title"
          className="mb-6 sm:text-3xl text-2xl font-medium title-font text-teal-700"
        >
          Recent Posts
        </h1>
      </div>
      <section className="text-gray-700 body-font">
        <RecentArticlesList recentArticles={recentArticles} />
      </section>
      <section className="text-gray-700 body-font  mt-20">
        <div className="flex flex-col text-center w-full">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            Most Popular Posts
          </h1>
        </div>
        <div id="featured" className="container pt-8 mx-auto flex flex-wrap">
          <FeaturedArticlesList featuredArticles={featuredArticles} />
        </div>
      </section>
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              &quot;Imagine starting your day writing something of your choosing
              for a purpose that mattered to you&quot;
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-base">
              -Kathleen Neagle Sokolowski
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function getStaticProps() {
  const products = await getProducts()
  const featuredArticles = await getFeaturedArticles()
  const recentArticles = await getRecentArticles()
  return { props: { products, recentArticles, featuredArticles } }
}

export default HomePage
