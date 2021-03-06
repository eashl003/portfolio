import React from "react"

export default function CertificationsModal(props) {
  const modalState = props.toggle
  const action = props.action

  return (
    <>
      {modalState ? (
        <>
          <div className="flex justify-center items-center fixed inset-0 z-50">
            <div className="max-w-7xl max-h-screen">
              <div className="border-0 rounded-lg shadow-lg relative w-full bg-white">
                <div className="flex justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold text-black">
                    Certifications
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={action}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto overflow-y-scroll w-120 h-110 text-black">
                  <div>Certifications</div>
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
