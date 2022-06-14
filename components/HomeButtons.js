import React from "react"
import Link from "next/link"

const HomeButtons = () => {
  return (
    <div className="absolute flex flex-col md:flex-row items-center">
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
        <span>Writing</span>
      </a>
      <a className="btn mx-6">
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
      <Link href={`/about`} passHref>
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
      </Link>
    </div>
  )
}

export default HomeButtons
