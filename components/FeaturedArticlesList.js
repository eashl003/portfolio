import NextImage from "./Image"
import Link from "next/link"

const FeaturedArticlesList = ({ featuredArticles }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mt-10">Translate Down on Hover</h1>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-5 transform translate-y-4 hover:translate-y-8 duration-500 ease-in-out">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48"
              src="https://picsum.photos/seed/hover/400/500"
              alt=""
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Case study
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Finding customers for your new business
            </a>
            <p className="mt-2 text-gray-500">
              Getting a new business off the ground is a lot of hard work. Here
              are five ideas you can use to find your first customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedArticlesList
