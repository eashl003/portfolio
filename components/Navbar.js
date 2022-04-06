import React, { useState } from "react"
import Link from "next/link"
import { Transition } from "@headlessui/react"
import ShopDropdownMenu from "./ShopDropdownMenu"
import BlogDropdownMenu from "./BlogDropdownMenu"

const Navbar = ({ categories = [], blogs = [] }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="top-0 z-50 font-arimo text-stone-50 font-bold tracking-wider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="flex justify-center text-3xl transform transition duration-500 hover:scale-105">
          <Link href="/" passHref>
            <p className="font-bold tracking-wider text-2xl mt-8">
              Elisabeth Ashley
            </p>
          </Link>

          <div className="hidden md:flex items-center mr-16">
                <div className="flex items-baseline">
                  <BlogDropdownMenu blogs={blogs} />
                   <ShopDropdownMenu categories={categories} /> 
                  <div className="ml-10 transform transition duration-500 hover:scale-105">
                    Projects
                  </div>
                  <div className="ml-12  transform transition duration-500 hover:scale-105 ">
                    <Link href="/about">About</Link>
                  </div>
                </div>
              </div>  
        </div> */}
        <div className="flex items-center justify-end mt-4">
          <div className="-mr-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-teal-200"
                  viewBox="0 0 20 20"
                  fill="blue-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
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
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <span className="text-teal-500 px-6 py-2 bg-yellow-400 rounded-xl shadow-3xl ">
                <Link href="/blog">Blog</Link>
              </span>
              <span className=" text-teal-50 text-center">
                {/* <p className="hover:font-bold px-3 py-2 rounded-md text-sm">
                    Shop
                  </p> */}
                <Link href="#">Projects</Link>
                <Link href="/about">About</Link>
              </span>
            </div>
          </div>
        )}
      </Transition>
    </div>
  )
}

export default Navbar
