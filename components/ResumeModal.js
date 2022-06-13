import React, { useState } from "react"

export default function ResumeModal(props) {
  const [openTab, setOpenTab] = useState(1)
  const modalState = props.toggle
  const action = props.action
  const color = "blue"

  return (
    <>
      {modalState ? (
        <>
          <div className="flex justify-center items-center fixed inset-0 z-50">
            <div className="max-w-7xl max-h-screen">
              <div className="border-0 rounded-lg shadow-lg relative w-full bg-white">
                <div className="flex justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-black">Resume</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={action}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto overflow-y-scroll w-120 h-110">
                  <div>
                    <ul
                      className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                      role="tablist"
                    >
                      <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                        <a
                          className={
                            "text-xs font-bold uppercase px-5 py-3 block leading-normal " +
                            (openTab === 1
                              ? "text-red-600 border-b-4 border-red-600"
                              : "text-" +
                                color +
                                "-900 border-b hover:text-red-600 hover:border-red-600")
                          }
                          onClick={(e) => {
                            e.preventDefault()
                            setOpenTab(1)
                          }}
                          data-toggle="tab"
                          href="#link1"
                          role="tablist"
                        >
                          Experience
                        </a>
                      </li>
                      <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                        <a
                          className={
                            "text-xs font-bold uppercase px-5 py-3 block leading-normal " +
                            (openTab === 2
                              ? "text-red-600 border-b-4 border-red-600"
                              : "text-" +
                                color +
                                "-900 border-b hover:text-red-600 hover:border-red-600")
                          }
                          onClick={(e) => {
                            e.preventDefault()
                            setOpenTab(2)
                          }}
                          data-toggle="tab"
                          href="#link2"
                          role="tablist"
                        >
                          Education
                        </a>
                      </li>
                      <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                        <a
                          className={
                            "text-xs font-bold uppercase px-5 py-3 block leading-normal " +
                            (openTab === 3
                              ? "text-red-600 border-b-4 border-red-600"
                              : "text-" +
                                color +
                                "-900 border-b hover:text-red-600 hover:border-red-600")
                          }
                          onClick={(e) => {
                            e.preventDefault()
                            setOpenTab(3)
                          }}
                          data-toggle="tab"
                          href="#link3"
                          role="tablist"
                        >
                          Volunteer Work
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="relative flex flex-col min-w-0 break-words bg-white text-black w-full mb-6">
                    <div className="px-4 py-5 flex-auto">
                      <div className="tab-content tab-space">
                        <div
                          className={openTab === 1 ? "block" : "hidden"}
                          id="link1"
                        >
                          <p>Experience</p>
                        </div>
                        <div
                          className={openTab === 2 ? "block" : "hidden"}
                          id="link2"
                        >
                          <p>Education</p>
                        </div>
                        <div
                          className={openTab === 3 ? "block" : "hidden"}
                          id="link3"
                        >
                          <p>Volunteer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={action}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}
