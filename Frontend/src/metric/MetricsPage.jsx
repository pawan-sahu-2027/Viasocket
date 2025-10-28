import React from "react";
import SideBar from "../component/SideBar";

function MetricsPage() {
  return (
    <>
      <div className="flex">
        {/* Left Sidebar */}
        <div>
          <SideBar />
        </div>

        {/* Right Content Area */}
        <div className="flex-1 p-5 bg-[#F4F3F1] overflow-hidden text-black">
          <div className="w-[95%]  h-[133px] bg-white m-10">
            <h6 className="text-2xl m-3">Notification Preferences</h6>

            <div className="flex gap-3 m-3">
              <i className="fa-solid fa-square-check  mt-1"></i>
              <p>Mail (Enabled by default)</p>
            </div>

            <div className="flex gap-3 m-3 ">
              <i className="fa-regular fa-square-full mt-1"></i>
              <p>Custom</p>
              <button className=" text-white px-2 border border-white">
                Enable
              </button>
            </div>
          </div>

          <div className="w-[95%] h-[250px]  m-10 bg-white">
            <div className="w-full h-[43px] text-3xl flex justify-between items-center  border-gray-400 ">
              <p className="pl-4"> Metrics </p>
              <div className="flex gap-2 ml-5">
                <button className=" text-white px-2 border border-white">
                  Tables
                </button>
                <button className=" text-white px-2 border border-white">
                  Charts
                </button>
              </div>
            </div>
            <p className="mt-30 ml-4">
              There is no Flow Run in the Today duration
            </p>
            <button className="gap-6 mt-3 ml-4 w-[152px] h-[32px] bg-red-700">
              Create new Flow
              <i className="fa-solid fa-plus pl-2"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MetricsPage;
