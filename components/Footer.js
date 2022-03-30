import NextImage from "./Image"
import Link from "next/link"

const Footer = () => (
  <div classNameName="container mx-auto px-4">
    <div className="container mx-auto px-4 text-teal-500">
      <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
          <h1 className="text-xl font-bold mb-6 hover:text-teal-200">
            Featured Articles
          </h1>
          <ul className="list-none footer-links">
            <li className="mb-2">
              <a
                href="#"
                className="border-b border-solid border-transparent hover:text-teal-200"
              >
                Article Title #1
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="border-b border-solid border-transparent hover:text-teal-200"
              >
                Article Title #2
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="border-b border-solid border-transparent hover:text-teal-200"
              >
                Article Title #3
              </a>
            </li>
          </ul>
        </div>
        <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
          <h5 className="text-xl font-bold mb-6 hover:text-teal-200">
            Resources
          </h5>
          <ul className="list-none footer-links">
            <li className="mb-2">
              <a
                href="#"
                className="border-b border-solid border-transparent hover:text-teal-200"
              >
                Resource #1
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="border-b border-solid border-transparent  hover:text-teal-200"
              >
                Resource #2
              </a>
            </li>
          </ul>
        </div>
        <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
          <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left hover:text-teal-200">
            Stay connected
          </h5>
          <div className="flex sm:justify-center xl:justify-start">
            <a
              href=""
              className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-teal-200 hover:text-teal-200 "
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href=""
              className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-teal-200 hover:text-teal-200"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href=""
              className="w-8 h-8 border border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-teal-100  hover:text-teal-500 "
            >
              <i className="fab fa-google-plus-g"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
