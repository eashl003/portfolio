import React, { useState } from "react"
import Link from "next/link"
import { Transition } from "@headlessui/react"
import ShopDropdownMenu from "./ShopDropdownMenu"
import BlogDropdownMenu from "./BlogDropdownMenu"
import AboutMenu from "./AboutMenu"

const Navbar = ({ categories = [], blogs = [] }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <nav className="bg-teal-800 text-white text-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 font-menlo text-3xl absolute top-4 ml-10 left-0">
                <p className="brand" id="p-id" aria-label="brand-name">
                  <span id="span-id" data-text="E">
                    E
                  </span>
                  <span id="span-id" data-text="L">
                    L
                  </span>
                  <span className="liz" id="span-id" data-text="I">
                    I
                  </span>
                  <span id="span-id" data-text="S">
                    S
                  </span>
                  <span id="span-id" data-text="A">
                    A
                  </span>
                  <span id="span-id" data-text="B">
                    B
                  </span>
                  <span id="span-id" data-text="E">
                    E
                  </span>
                  <span id="span-id" data-text="T">
                    T
                  </span>
                  <span id="span-id" data-text="H">
                    H
                  </span>
                </p>
              </div>
              <div className="hidden md:flex items-center md:flex-1 lg:w-">
                <div className="ml-10 flex items-baseline">
                  <BlogDropdownMenu blogs={blogs} />
                  <ShopDropdownMenu categories={categories} />
                  <div className="rounded-md ml-4">Projects</div>
                  <div className="blur-md ml-8 invert drop-shadow-xl md:filter-none">
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
                <ul>
                  <ul className="hover:font-bold">
                    <li className="hover:font-bold text-white px-3 py-2 rounded-md text-sm font-medium">
                      Blog
                    </li>
                  </ul>
                  <li className="hover:font-bold text-white px-3 py-2 rounded-md text-sm font-medium">
                    Shop
                  </li>
                  <li className="text-white px-3 py-2 rounded-md text-sm">
                    <Link href="#">Projects</Link>
                  </li>
                  <li className="hover:font-bold text-white px-3 py-2 rounded-md text-sm font-medium">
                    <Link
                      href="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
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
