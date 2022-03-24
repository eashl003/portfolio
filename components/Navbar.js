import React, { useState } from "react"
import Link from "next/link"
import { Transition } from "@headlessui/react"
import ShopDropdownMenu from "./ShopDropdownMenu"
import BlogDropdownMenu from "./BlogDropdownMenu"

const Navbar = ({ categories = [], blogs = [] }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="sticky top-0 z-50 bg-teal-500 font-arimo text-teal-100 font-extrabold tracking-widest text-xl">
      <nav className="text-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 text-3xl absolute top-4 ml-16 left-0 hover:text-teal-200">
                <Link href="/" passHref>
                  <p>Elisabeth Ashley</p>
                </Link>
              </div>
              <div className="hidden md:flex items-center mr-16">
                <div className="flex items-baseline">
                  <BlogDropdownMenu blogs={blogs} />
                  {/* <ShopDropdownMenu categories={categories} /> */}
                  <div className="text-teal-50 ml-10 hover:text-teal-200">
                    Projects
                  </div>
                  <div className="ml-12 text-teal-50 hover:text-teal-200">
                    <Link href="/about">About</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
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
                      d="M4 6h16M4 12h16M4 18h16"
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
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <ul className=" text-teal-50 text-center">
                  <ul className="hover:font-bold">
                    <li className="hover:font-bold px-3 py-2 mt-8 rounded-md text-sm">
                      Blog
                    </li>
                  </ul>
                  {/* <li className="hover:font-bold px-3 py-2 rounded-md text-sm">
                    Shop
                  </li> */}
                  <li className="hover:font-bold px-3 py-2 rounded-md text-sm">
                    <Link href="#">Projects</Link>
                  </li>
                  <li className="hover:font-bold px-3 py-2 rounded-md text-sm">
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
      </nav>
    </div>
  )
}

export default Navbar
