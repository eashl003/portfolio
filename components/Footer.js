import NextImage from "./Image"
import Link from "next/link"

const Footer = () => (
  <div className="flex justify-between m-6">
    <p className="text-xs font-semibold text-gray-600"></p>
    <div className="flex gap-3 ml-4">
      <a
        href="https://medium.com/@elisabethashley"
        target="_blank"
        passHref
        rel="noreferrer"
      >
        <i className="fab fa-medium fa-2x transform hover:-translate-y-1 transition-all duration-500 hover:text-teal-700"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/elisabethjoyashley"
        passHref
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-linkedin fa-2x transform hover:-translate-y-1 transition-all duration-500 hover:text-teal-700"></i>
      </a>
      <a
        href="https://github.com/eashl003"
        passHref
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-github fa-2x transform hover:-translate-y-1 transition-all duration-500 hover:text-teal-700"></i>
      </a>
    </div>
  </div>
)

export default Footer
