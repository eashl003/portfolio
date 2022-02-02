/* eslint-disable prettier/prettier */
import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/solid"
import classNames from "classnames"
import Link from "next/link"

const BlogDropdownMenu = ({ blogs = [] }) => {
  return (
    <Menu as="div" className="z-10 relative inline-block text-left">
        <Menu.Button className="menu-btn uppercase inline-flex justify-center w-full px-4 py-2 text-teal-800 hover:text-teal-600">
        Blog
        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
        <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white">
            <div className="py-1">
            <ul className="text-teal-800 ml-8 hover:font-bold">
                <Menu.Item>
                    {({ active }) => (
                    <Link
                    href="/blog"
                    className={classNames(
                        active ? "bg-gray-100 text-white" : "text-white",
                        "block px-4 py-2 text-sm"
                    )}
                    >
                    All Posts
                    </Link>
                    )}
                    </Menu.Item>
                </ul>
                <ul className="text-teal-800 ml-8">
                {blogs.map((_blog) => {
                    return (
                    <li key={_blog.id} className="hover:font-bold">
                        <Menu.Item>
                        {({ active }) => (
                            <Link
                            href={`/blogs/${_blog.slug}`}
                            className={classNames(
                                active ? "bg-gray-100 text-black" : "text-black",
                                "block px-4 py-2 text-sm"
                            )}
                            >
                            {_blog.name}
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
  )
}

export default BlogDropdownMenu