import React from "react";

function Hero() {
  return (
    <>
      <div
        className="w-full h-[290px]  flex justify-center "
        style={{ backgroundColor: "#F8F4FF" }}
      >
        <div className="w-[95%] h-[190px] margin-[10px]  flex" >
          <div className="w-[80%] h-full text-black bg-white-500">
            <h1 className="font-sami-bold text-7xl p-4 ">
              {" "}
              Build <span className="text-red-500"> Intelligent</span>{" "}
              automations
            </h1>
            <p>
              Connect 1,583+ Apps, Deploy AI Agents, and Build Custom
              Workflows—All Without Writing a Single Line of Code!
            </p>
            <div className="flex w-full h-[45px] justify-start">
              <div>
                <button className="bg-red-500 text-white w-[114px] h-full cursor-pointer">
                  Start for free
                </button>
              </div>
              <div>
                <button className="w-[260px] h-full">
                  Free call from Automation experts
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/5 h-full bg-white-500 text-black flex flex-col item-center justify-center ">
            <div className=" m-2"> Need automation ideas?</div>
            <a className="m-2 text-red-500" href="#">
              Generate with Ai
            </a>
            <div className="m-2"> Want professional help? </div>
            <a className="m-2 text-red-500" href="#">
              Hire an Expert
            </a>
          </div>
          {/* Content goes here */}
        </div>
      </div>
    </>
  );
}

export default Hero;
