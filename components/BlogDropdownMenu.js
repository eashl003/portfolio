import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/solid"
import classNames from "classnames"
import Link from "next/link"

const BlogDropdownMenu = ({ blogs = [] }) => {
  return (
    <Menu as="div" className="z-10 relative inline-block text-left">
      <Menu.Button className="menu-btn inline-flex justify-center w-full px-4 py-2 font-extrabold text-xl hover:text-teal-200">
        Blog
        <ChevronDownIcon
          className="-mr-1 ml-2 mt-1 h-5 w-5"
          aria-hidden="true"
        />
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
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white text-md ">
          <div className="py-1">
            <ul className="text-teal-500 ml-8 hover:text-teal-200">
              <Menu.Item>
                {({ active }) => (
                  <Link href="/blog" passHref>
                    All Posts
                  </Link>
                )}
              </Menu.Item>
            </ul>
            <ul className="text-teal-500 ml-8">
              {blogs.map((_blog) => {
                return (
                  <li key={_blog.id}>
                    <Menu.Item>
                      {({ active }) => (
                        <li className="hover:text-teal-200">
                          <Link href={`/blogs/${_blog.slug}`} passHref>
                            {_blog.name}
                          </Link>
                        </li>
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
