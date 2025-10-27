

import React from 'react'
import SideBar from '../component/SideBar'

function AiAgentsPage() {
  return (
    <>
      <div className="flex h-screen">
        {/* Left side content */}
        <div>
          <SideBar />
        </div>

        {/* Right side content */}
        <div className="flex-1 flex items-center justify-center" style={{ backgroundColor: "#F4F3F1" }}>
          <div className="w-[250px] flex flex-col items-center justify-center text-center">
            <i className="fa-solid fa-dice text-6xl text-gray-700 mb-3"></i>
            <p className="text-gray-800 font-semibold text-lg whitespace-nowrap">
              Create Your First Agent 
            </p>
            <button className="mt-4 px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-800 transition duration-300">
              + Create New Agent
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AiAgentsPage
