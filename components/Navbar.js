import React, { useState, useEffect, Fragment } from "react"
import Link from "next/link"
import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/solid"
import classNames from "classnames"

const Navbar = ({ categories = []}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <nav className="bg-teal-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 font-menlo text-3xl absolute top-4 ml-10 left-0 hover:font-bold">
                elisabeth ashley
              </div>
              <div className="hidden md:flex items-center md:flex-1 lg:w-">
                <div className="ml-10 flex items-baseline space-x-4">
                  <div className="hover:font-bold rounded-md">
                    <Link href="/blog" passHref>
                      Blog
                    </Link>
                  </div>
                  <div className="rounded-md">
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                          Shop
                          <ChevronDownIcon
                            className="-mr-1 ml-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="text-black origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            <ul>
                              {categories.map((_category) => {
                                return (
                                  <li className="ml-8 pt-2 pb-1 hover:font-bold">
                                    <Menu.Item>
                                    {({ active }) => (
                                      <Link
                                        href={`/categories/${_category.slug}`}
                                        className={classNames(
                                          active
                                            ? "bg-gray-100 text-black"
                                            : "text-black",
                                          "block px-4 py-2 text-sm"
                                        )}
                                      >
                                        {_category.name}
                                      </Link>
                                    )}
                                    </Menu.Item>
                                  </li>
                                  )
                                })}
                            </ul>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                  <div className="hover:font-bold rounded-md">
                    <Link href="#">Projects</Link>
                  </div>
                  <div className="">
                    <Link href="#">About</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
                  <li className="hover:font-bold text-white px-3 py-2 rounded-md text-sm font-medium">
                    <Link
                      href="#"
                      className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Blog
                    </Link>
                  </li>
                  <li className="hover:font-bold text-white px-3 py-2 rounded-md text-sm font-medium">
                    <Link
                      href="/shop"
                      className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Shop
                    </Link>
                  </li>
                  <li className="hover:font-bold text-white px-3 py-2 rounded-md text-sm font-medium">
                    <Link
                      href="#"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Projects
                    </Link>
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
