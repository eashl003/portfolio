import React from "react"
import Link from "next/link"

const ThemeButton = (props) => {
  return (
    <div>
      <Link href={`/about`} passHref>
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
          <span>{props.title}</span>
        </a>
      </Link>
    </div>
  )
}

export default ThemeButton
