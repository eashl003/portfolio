import React, { useState } from "react"
import HomeButtons from "./HomeButtons"
import Name from "./Name"

const Hero = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-900">
      {/* <Name /> */}
      <HomeButtons />
    </div>
  )
}

export default Hero
