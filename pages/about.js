import React, { useState, useCallback } from "react"
import { getAbout } from "../utils/api"
import ThemeButton from "../components/ThemeButton"
import Modal from "../components/Modal"

const About = ({ about }) => {
  const [showModal, setShowModal] = useState(false)

  function openModal() {
    setShowModal(!showModal)
  }

  return (
    <div className="grid grid-cols-2 h-screen bg-slate-900 text-white">
      <section className="mt-100 ml-40">
        <h1 className="text-3xl">
          Elisabeth Ashley<span className="text-xl"> (She/Her)</span>
        </h1>
        <h1 className="text-xl">
          Oracle APEX Developer at Insum Solutions a Talan Company
        </h1>
        <div className="-mt-16">
          <ThemeButton title="Email" />
        </div>
      </section>
      <section className="">
        <h1 className="mt-64 underline underline-offset-1 text-3xl">
          About Me
        </h1>
        <div className="flex flex-row items-center space-x-6">
          <span onClick={openModal}>
            <ThemeButton title="Resume" />
          </span>
          <Modal toggle={showModal} action={openModal} />
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
