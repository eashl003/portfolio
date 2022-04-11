import NextImage from "./Image"
import Link from "next/link"

const Footer = () => (
  <footer className="grid grid-rows-4 grid-flow-col pt-10 bg-gray-900 text-white h-56 pl-48 pr-48">
    <div className="mb-6 col-span-1">
      <h5 className="uppercase font-bold mb-2.5 text-xl">Menu</h5>
      <ul className="text-lg">
        <li>
          <a href="#!" className="text-white">
            Blog
          </a>
        </li>
        <li>
          <a href="#!" className="text-white">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#!" className="text-white">
            About
          </a>
        </li>
      </ul>
    </div>

    <div className="mb-6 col-span-1 row-start-1">
      <h5 className="uppercase font-bold mb-2.5 text-xl">Resources</h5>
      <ul className="text-lg">
        <li>
          <a href="#!" className="text-white">
            Link 1
          </a>
        </li>
        <li>
          <a href="#!" className="text-white">
            Link 2
          </a>
        </li>
        <li>
          <a href="#!" className="text-white">
            Link 3
          </a>
        </li>
      </ul>
    </div>
    <div className="text-xl mb-6 row-start-1 row-end-5 text-center">
      <a
        href="https://medium.com/@elisabethashley"
        target="_blank"
        passHref
        rel="noreferrer"
      >
        <i className="fab fa-medium fa-2x px-2 transform hover:-translate-y-1 transition-all duration-500 hover:text-royal-300"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/elisabethjoyashley"
        passHref
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-linkedin fa-2x px-2 transform hover:-translate-y-1 transition-all duration-500 hover:text-royal-300"></i>
      </a>
      <a
        href="https://github.com/eashl003"
        passHref
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-github fa-2x px-2 transform hover:-translate-y-1 transition-all duration-500 hover:text-royal-300"></i>
      </a>
      <a
        href="https://codepen.io/eashl003"
        passHref
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-codepen fa-2x px-2 transform hover:-translate-y-1 transition-all duration-500 hover:text-royal-300"></i>
      </a>
      <form className="flex" action="">
        <strong className="truncate mt-8 pr-4 text-md">
          Sign up for newsletter
        </strong>
        <input
          type="text"
          className="
                form-control 
                mt-8
                h-10
                w-2/5
                px-4
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
          id="exampleFormControlInput1"
          placeholder="Email address"
        />
        <button
          type="submit"
          className="inline-block h-10  mt-8 ml-4 px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          Subscribe
        </button>
      </form>
    </div>
    {/* <div className="block text-center p-4 bg-gray-900">
      © 2021 Copyright:
      <a className="text-white" href="https://tailwind-elements.com/">
        Test
      </a>
    </div> */}
  </footer>
)

export default Footer
