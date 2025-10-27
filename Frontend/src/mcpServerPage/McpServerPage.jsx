import React from "react";
import SideBar from "../component/SideBar";
function McpServerPage() {
  return (
    <>
      <div className="flex">
        {/* left side? */}
        <div>
          <SideBar />
        </div>

        {/* right side? */}

        <div className="w-full min-h-screen flex flex-col items-center bg-[#F4F3F1]">
          {/* Title */}
          <h1 className="text-3xl  text-white mt-10">Viasocket MCP</h1>

          {/* Paragraph */}
          <p className="text-white text-center max-w-2xl mt-4">
            Easily connect your AI to thousands of apps with just a URL. No
            complex API integrations required.
          </p>
          <div className="flex  items-center">
            <div className="flex justify-between gap-6 mt-10 px-10">
              {/* first div */}
              <div className="w-1/3 p-6 border border-gray-400">
                <span className="text-sm m-1">STEP ONE</span>
                <h6 className="text-xl m-1">Get Your MCP Endpoint</h6>
                <p>
                  Instantly get a unique, secure URL that connects your AI
                  assistant to viaSocket’s network of integrations.
                </p>
              </div>

              {/* second div */}
              <div className="w-1/3 p-6 border border-gray-400">
                <span className="text-sm m-1">STEP TWO</span>
                <h6 className="text-xl m-1">Choose Your Actions</h6>
                <p>
                  Easily select and define the actions your AI can perform, like
                  sending emails or Slack messages, giving you full control.
                </p>
              </div>

              {/* third div */}
              <div className="w-1/3 p-6 border border-gray-400">
                <span className="text-sm m-1">STEP THREE</span>
                <h6 className="text-xl m-1">Connect Your AI Assistant</h6>
                <p>
                  Connect your AI Assistant easily with the MCP endpoint for
                  instant, secure task execution.
                </p>
              </div>
            </div>
          </div>
          <div>
            <button className="mt-10 px-6 py-2 bg-red-500 text-white rounded hover:bg-red-700 duration-300">
              Get Started 
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default McpServerPage;
