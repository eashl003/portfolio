import React, { useState } from "react"
import { getAbout } from "../utils/api"
import ThemeButton from "../components/ThemeButton"

const About = ({ about }) => {
  return (
    <div className="grid grid-cols-2 h-screen bg-slate-900 text-white">
      <section className="mt-48 ml-40">
        <h1 className="text-3xl">
          Elisabeth Ashley<span className="text-xl"> (She/Her)</span>
        </h1>
        <h1 className="text-xl">
          Oracle APEX Developer at Insum Solutions a Talan Company
        </h1>
        <div className="align-middle">
          <ThemeButton title="Email" />
        </div>
      </section>
      <section className="">
        <h1 className="underline underline-offset-1 text-3xl">About Me</h1>
        <div className="flex flex-row items-center">
          <ThemeButton title="Resume" />
          <ThemeButton title="Certifications" />
        </div>
      </section>
    </div>
  )
}

export async function getStaticProps() {
  const about = await getAbout()

  return { props: { about } }
}

export default About
