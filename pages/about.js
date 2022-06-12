import React, { useState } from "react"
import { getAbout } from "../utils/api"
import ThemeButton from "../components/ThemeButton"

const About = ({ about }) => {
  return (
    <div className="bg-slate-900 flex flex-col h-screen text-center text-teal-100">
      <section className="">
        <h1 className="text-3xl">
          Elisabeth Ashley<span className="text-xl"> (She/Her)</span>
        </h1>
        <h1 className="text-xl">
          Oracle APEX Developer at Insum Solutions a Talan Company
        </h1>
        <ThemeButton title="Email" />
      </section>
    </div>
  )
}

export async function getStaticProps() {
  const about = await getAbout()

  return { props: { about } }
}

export default About
