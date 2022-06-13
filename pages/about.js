import React, { useState, useCallback } from "react"
import { getAbout } from "../utils/api"
import ThemeButton from "../components/ThemeButton"
import ResumeModal from "../components/ResumeModal"
import CertificationsModal from "../components/CertificationsModal"

const About = ({ about }) => {
  const [showResumeModal, setShowResumeModal] = useState(false)
  const [showCertModal, setShowCertModal] = useState(false)
  function openResumeModal() {
    setShowResumeModal(!showResumeModal)
  }
  function openCertModal() {
    setShowCertModal(!showCertModal)
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
          <span onClick={openResumeModal}>
            <ThemeButton title="Resume" />
          </span>
          <ResumeModal toggle={showResumeModal} action={openResumeModal} />
          <span onClick={openCertModal}>
            <ThemeButton title="Certifications" />
          </span>
          <CertificationsModal toggle={showCertModal} action={openCertModal} />
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
