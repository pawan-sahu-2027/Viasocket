import React from "react";
import { Link } from "react-router-dom";
import SideBar from "../component/SideBar";
import Home_img from "../images/Home_img.png";
function HomePage() {
  return (
    <>
      <div className="flex ">
        {/* left side  */}
        <div className=" bg-gray-100">
          <SideBar />{" "}
        </div>

        {/* right side  */}

        <div className="flex-1 h-screen  bg-[#F4F3F1] overflow-hidden">
          <div className=" w-full h-[46px] flex justify-end border ">
            <Link to="/">
              <div className="flex items-center gap-3 m-2  hover:bg-gray-800 border border-red-500 cursor-pointer ">
                <i
                  className="fa-solid fa-gift"
                  style={{ color: "#FFD43B" }}
                ></i>
                <p>Lifetime Free Access</p>
              </div>
            </Link>

            <Link to="/">
              <div className="flex items-center gap-3 px-4 m-2 border  hover:bg-gray-800 cursor-pointer ">
                <i class="fa-solid fa-phone"></i>
                <p>Support</p>
              </div>
            </Link>
          </div>
          <div className="w-full h-[50px] text-2xl flex ml-8 items-end ">
            <p className="mr-2">Find Automation Ideas with AI or </p>
            <span className="text-red-500">Create a flow manually</span>
          </div>

          <div className="w-full h-[28px] text-xl flex ml-8 items-end gap-3">
            <p>What would you like to Automate? </p>
            <i class="fa-solid fa-poo-storm"></i>
          </div>

          <div className="w-[60vw] h-[39px] text-xl flex ml-8 items-center mt-4 mb-2 border border-[#856A00] px-2  bg-white">
            <i
              className="fa-solid fa-poo-storm"
              style={{ color: "#856A00" }}
            ></i>
            <input
              type="text "
              placeholder="Take help with AI, what do you want to achieve?"
              className="flex-1 bg-transparent outline-none "
            />
          </div>

          <div className="w-full-[39px] text-xl flex ml-8 items-center  px-2 ">
            <p>workflows </p>
          </div>

          <div className="w-[60vw] h-[186px]  mt-5 bg-white ml-9">
            <img src={Home_img} alt="Home Image"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
