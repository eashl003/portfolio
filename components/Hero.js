import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import RecentArticlesList from "./RecentArticlesList"
import { Transition } from "@headlessui/react"
const Hero = ({ recentArticles, home }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="hide-scrollbar">
      <div className="hero-background  grid grid-cols-1 gap-4 place-content-center">
        <div>
          <h1 className="hero-text text-5xl text-left font-medium text-stone-50 font-gravitas mt-96">
            {home.heading}
          </h1>
        </div>
        <div className="flex justify-center items-center text-lg  font-medium text-stone-50 font-arimo mt-5">
          <h1 className="w-4/5">{home.introduction}</h1>
        </div>
        <div className="flex space-x-8 w-full h-full justify-center content-center items-center mt-5">
          <button className="bg-transparent text-2xl text-white font-semibold hover:text-pink-500 py-2 px-4 border border-white hover:border-pink-500 rounded shadow-2xl transform transition duration-500 hover:scale-105">
            Blog
          </button>
          <button className="bg-transparent text-2xl text-white font-semibold hover:text-pink-500 py-2 px-4 border border-white hover:border-pink-500 rounded shadow-2xl transform transition duration-500 hover:scale-105">
            Portfolio
          </button>
          <button className="bg-transparent text-2xl text-white font-semibold hover:text-pink-500 py-2 px-4 border border-white hover:border-pink-500 rounded shadow-2xl transform transition duration-500 hover:scale-105">
            About
          </button>
        </div>
        <div className="flex justify-center items-center">
          <a href="#hero-section-b">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="arrow-bounce h-10 w-10 text-white absolute mt-64"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>
      <section id="hero-section-b" className="hero-section-b bg-stone-50">
        <RecentArticlesList recentArticles={recentArticles} />
      </section>
      <section className="hero-section-c bg-teal-500 h-48 -m-10">
        <div>Test</div>
      </section>
    </div>
  )
}

export default Hero
