/* eslint-disable prettier/prettier */
import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/solid"
import classNames from "classnames"
import Link from "next/link"

const ShopDropdownMenu = ({ categories = [] }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
          Shop
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
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
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Shop All
                </Link>
              )}
            </Menu.Item>
            <ul className="text-black ml-8">
              {categories.map((_category) => {
                return (
                  <li key={_category.id}>
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                        href={`/categories/${_category.slug}`}
                          className={classNames(
                            active ? "bg-gray-100 text-black" : "text-black",
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
  )
}

export default ShopDropdownMenu