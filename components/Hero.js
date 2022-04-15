import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import RecentArticlesList from "./RecentArticlesList"
import { Transition } from "@headlessui/react"
import Footer from "./Footer"

const Hero = ({ recentArticles, home }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="absolute m-auto left-0 right-0 overflow-x-hidden">
      <div className="hero-background  grid grid-cols-1 gap-4 place-content-center">
        <div>
          <h1 className="hero-text text-5xl text-center font-medium text-stone-50 font-gravitas">
            {home.heading}
          </h1>
        </div>
        <div className="flex justify-center items-center text-xl  font-medium text-stone-50 font-arimo mt-5">
          <h1 className="w-4/5">{home.introduction}</h1>
        </div>
        {/* Buttons */}
        <div className="flex space-x-8 w-full h-full justify-center content-center items-center mt-5">
          <a className="btn">
            <svg width="277" height="62">
              <defs>
                <linearGradient id="grad1">
                  <stop offset="0%" stopColor="#FF5E62" />
                  <stop offset="100%" stopColor="#FF9966" />
                </linearGradient>
              </defs>
              <rect
                x="5"
                y="5"
                rx="25"
                fill="none"
                stroke="url(#grad1)"
                width="266"
                height="50"
              ></rect>
            </svg>
            <span>Blog</span>
          </a>
          <a className="btn">
            <svg width="277" height="62">
              <defs>
                <linearGradient id="grad1">
                  <stop offset="0%" stopColor="#FF5E62" />
                  <stop offset="100%" stopColor="#FF9966" />
                </linearGradient>
              </defs>
              <rect
                x="5"
                y="5"
                rx="25"
                fill="none"
                stroke="url(#grad1)"
                width="266"
                height="50"
              ></rect>
            </svg>
            <span>Portfolio</span>
          </a>
          <a className="btn">
            <svg width="277" height="62">
              <defs>
                <linearGradient id="grad1">
                  <stop offset="0%" stopColor="#FF9966" />
                  <stop offset="100%" stopColor="#FF5E62" />
                </linearGradient>
              </defs>
              <rect
                x="5"
                y="5"
                rx="25"
                fill="none"
                stroke="url(#grad1)"
                width="266"
                height="50"
              ></rect>
            </svg>
            <span>About</span>
          </a>
        </div>

        {/* <div className="flex space-x-8 w-full h-full justify-center content-center items-center mt-5">
          <button className="bg-transparent text-2xl text-white font-semibold hover:text-royal-250 py-2 px-4 border border-white hover:border-royal-250 rounded shadow-2xl transform transition duration-500 hover:scale-105">
            Blog
          </button>
          <button className="bg-transparent text-2xl text-white font-semibold hover:text-royal-250 py-2 px-4 border border-white hover:border-royal-250 rounded shadow-2xl transform transition duration-500 hover:scale-105">
            Portfolio
          </button>
          <button className="bg-transparent text-2xl text-white font-semibold hover:text-royal-250 py-2 px-4 border border-white hover:border-royal-250 rounded shadow-2xl transform transition duration-500 hover:scale-105">
            About
          </button>
        </div> */}
        {/* Arrow */}
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
      <Footer />
    </div>
  )
}

export default Hero
