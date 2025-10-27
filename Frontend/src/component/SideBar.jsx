import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <>
      <div className="w-[300px] h-screen bg-black text-white flex flex-col  gap-3">
        {/* Personal details */}
        <div className=" flex h-14 w-full  ">
          <div className="h-12 w-12 bg-gray-800 text-white text-align-center  flex justify-center items-center m-4">
            <p className="text-xl">PA</p>
          </div>
          <div className="flex  h-full w-full justify-between items-end pr-4">
            <p>Pawan sahu</p>
            <i
              className="fa-solid fa-caret-down"
              style={{ color: "#ffffff" }}
            ></i>
          </div>
        </div>
        {/* /create work flow Button */}
        <div className="w-full h-[32px] flex ">
          <Link to="#">
            <button className=" w-[150px] h-full bg-red-500 text-white ml-3 hover:bg-red-700 duration-300 ">
              Create Work Flow
            </button>
          </Link>
        </div>

        {/* Menu items */}
        {/* item-1 */}
        <Link to="/HomePage">
          <div className="flex items-center gap-3 px-4  hover:bg-gray-800 cursor-pointer rounded-md">
            <i className="fa-solid fa-house"></i>
            <p>Home</p>
          </div>
        </Link>
        {/* item-2 */}
        <Link to="/MetricsPage">
          <div className="flex items-center gap-3 px-4  hover:bg-gray-800 cursor-pointer rounded-md">
            <i class="fa-solid fa-money-bill-trend-up"></i>
            <p>Metrics</p>
          </div>
        </Link>
        {/* item-3 */}
        <Link to="/ConnectionsPage">
          <div className="flex items-center gap-3 px-4  hover:bg-gray-800 cursor-pointer rounded-md">
            <i class="fa-solid fa-shield-virus"></i>
            <p>Connections</p>
          </div>
        </Link>
        {/* item-4 */}
        <Link to="/McpServerPage">
          <div className="flex items-center gap-3 px-4  hover:bg-gray-800 cursor-pointer rounded-md">
            <i class="fa-solid fa-square-plus"></i>
            <p>MCP Service</p>
          </div>
        </Link>

        {/* item-5 */}
        <Link to="/AiAgentsPage">
          <div className="flex items-center gap-3 px-4  hover:bg-gray-800 cursor-pointer rounded-md">
            <i class="fa-solid fa-house-tsunami"></i>
            <p>AI Agents</p>
          </div>
        </Link>

        {/* item-6 */}
        {/* <Link to="#"> */}
          <div className="flex items-center gap-3 px-4  hover:bg-gray-800 cursor-pointer rounded-md">
            <i class="fa-solid fa-phone"></i>
            <p>Support</p>
          </div>
        {/* </Link> */}

        {/* item-6 */}
        {/* <Link to="#"> */}
          <div className="flex items-center gap-3 px-4  hover:bg-gray-800 cursor-pointer rounded-md">
            <i class="fa-solid fa-dice"></i>
            <p>Templates</p>
          </div>
        {/* </Link> */}

        {/* item-7 */}
        {/* <Link to="#"> */}
          <div className="flex items-center gap-3 px-4  hover:bg-gray-800 cursor-pointer rounded-md">
            <i className="fa-solid fa-gift" style={{ color: "#FFD43B" }}></i>
            <p>Lifetime Free Access</p>
          </div>
        {/* </Link> */}

        {/* Recent Flow history */}

        <div className="flex items-center gap-3 px-4">
          <p className="mr-20">Recent Flows </p>
          <i class="fa-solid fa-magnifying-glass"></i>
          <p>ctrl+k</p>
        </div>
        {/* Rec-1 */}
        <Link to="/">
          <div className="flex items-center gap-3 px-4  hover:bg-gray-800 cursor-pointer rounded-md">
            <i class="fa-solid fa-circle-plus"></i>
            <p>Untitled Flow</p>
          </div>
        </Link>

        {/* Rec-2 */}

        <Link to="/">
          <div className="flex items-center gap-3 px-4  hover:bg-gray-800 cursor-pointer rounded-md">
            <i class="fa-solid fa-circle-plus"></i>
            <p>Untitled Flow</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default SideBar;



