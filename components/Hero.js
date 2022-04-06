import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import RecentArticlesList from "./RecentArticlesList"
import { Transition } from "@headlessui/react"
const Hero = ({ recentArticles, home }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="hero-background overflow-hidden">
      <div className="top-0 z-50 font-arimo text-stone-50 font-bold tracking-wider">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end mt-4">
            <div className="-mr-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <button className="bg-transparent text-2xl text-white font-semibold hover:text-pink-500 py-2 px-4 border border-white hover:border-pink-500 rounded transform transition duration-500 hover:scale-105">
                    M<br></br>E<br></br>N<br></br>U
                  </button>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div>
              <div
                ref={ref}
                className="flex justify-end px-2 pt-2 pb-3 space-y-1 sm:px-3"
              >
                <ul className=" text-teal-50 text-right align-right mr-10">
                  <ul className="hover:font-bold">
                    <li className="bg-transparent text-md text-white font-semibold hover:text-pink-500 py-2 px-4 border border-white hover:border-pink-500 rounded shadow-2xl transform transition duration-500 hover:scale-105">
                      Blog
                    </li>
                  </ul>
                  {/* <li className="hover:font-bold px-3 py-2 rounded-md text-sm">
                    Shop
                  </li> */}
                  <li className="mt-4 bg-transparent text-md text-white font-semibold hover:text-pink-500 py-2 px-4 border border-white hover:border-pink-500 rounded shadow-2xl transform transition duration-500 hover:scale-105">
                    <Link href="#">Projects</Link>
                  </li>
                  <li className="mt-4 bg-transparent text-md text-white font-semibold hover:text-pink-500 py-2 px-4 border border-white hover:border-pink-500 rounded shadow-2xl transform transition duration-500 hover:scale-105">
                    <Link
                      href="#"
                      className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md text-base"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </Transition>
      </div>
      <div>
        <h1 className="flex justify-center items-center text-3xl  font-medium text-stone-50 font-arimo mt-48">
          {home.heading}
        </h1>
      </div>
      <div className="flex justify-center items-center text-lg  font-medium text-stone-50 font-arimo">
        <h1 className="w-4/5">{home.introduction}</h1>
      </div>
      <div className="flex space-x-8 w-full h-full justify-center content-center items-center text-blue-500 text-xl -mt-48">
        <button className="bg-transparent text-2xl text-white font-semibold hover:text-pink-500 py-2 px-4 border border-white hover:border-pink-500 rounded shadow-2xl transform transition duration-500 hover:scale-105">
          Blog
        </button>
        <button className="bg-transparent text-2xl text-white font-semibold hover:text-pink-500 py-2 px-4 border border-white hover:border-pink-500 rounded shadow-2xl transform transition duration-500 hover:scale-105">
          Portfolio
        </button>
        <button className="bg-transparent text-2xl text-white font-semibold hover:text-pink-500 py-2 px-4 border border-white hover:border-pink-500 rounded shadow-2xl transform transition duration-500 hover:scale-105">
          About
        </button>

        {/* <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-teal-100 font-arimo">
            {home.heading}
          </h1>
          <p className="mb-8 leading-relaxed text-teal-100">
            {home.introduction}
          </p>
          <div className="flex justify-center">
            <Link href="/blog" passHref>
              <button className="inline-flex font-arimo text-stone-50 font-thin bg-salmon-100 border-0 py-2 px-6 shadow-lg focus:outline-none rounded text-xl transform transition duration-500 hover:scale-110">
                Blog
              </button>
            </Link>
            <Link href="/shop" passHref>
              <button className="ml-4 inline-flex font-arimo text-salmon-100 font-thin bg-stone-50 border-0 py-2 px-6 shadow-lg focus:outline-none rounded text-lg transform transition duration-500 hover:scale-110">
                Projects
              </button>
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Hero
