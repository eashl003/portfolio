import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/solid"
import classNames from "classnames"
import Link from "next/link"

const ShopDropdownMenu = ({ categories = [] }) => {
  return (
    <Menu as="div" className="z-10 relative inline-block text-left">
      <div>
        <Menu.Button className="uppercase inline-flex justify-center text-teal-800 px-4 py-2 outline-none focus:outline-none hover:text-teal-600">
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
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white text-md uppercase">
          <div className="py-1">
            <ul className="text-teal-800 ml-8 hover:text-teal-600">
              <Menu.Item>
                {({ active }) => (
                  <Link href="/shop" passHref>
                    Shop All
                  </Link>
                )}
              </Menu.Item>
            </ul>
            <ul className="text-teal-800 ml-8">
              {categories.map((_category) => {
                return (
                  <li key={_category.id}>
                    <Menu.Item>
                      {({ active }) => (
                        <li className="hover:text-teal-600">
                          <Link href={`/categories/${_category.slug}`} passHref>
                            {_category.name}
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

export default ShopDropdownMenu
