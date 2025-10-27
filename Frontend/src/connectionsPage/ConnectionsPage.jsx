// import React from "react";
// import SideBar from "../component/SideBar";
// import { Link } from "react-router-dom";
// function ConnectionsPage() {
//   return (
//     <>
//       <div className="flex">
//         {/* left side content */}
//         <div>
//           <SideBar />
//         </div>

//         {/* right side content */}

//         <div className="w-full  min-h-screen ">
//           <div className=" w-full h-[46px] flex justify-end  ">
//             <Link to="/">
//               <div className="flex items-center gap-3 m-2  hover:bg-gray-800 border border-red-500 cursor-pointer ">
//                 <i
//                   className="fa-solid fa-gift"
//                   style={{ color: "#FFD43B" }}
//                 ></i>
//                 <p>Lifetime Free Access</p>
//               </div>
//             </Link>

//             <Link to="/">
//               <div className="flex items-center gap-3 px-4 m-2 border  hover:bg-gray-800 cursor-pointer ">
//                 <i className="fa-solid fa-phone"></i>
//                 <p>Support</p>
//               </div>
//             </Link>

            
//           </div>
          
//         <div className="w-[80vw] h-[32px]">
//           <h3 className="text-lg font-semibold ml-5">Connections</h3>
//         </div>

//         <div className="w-[80vw] h-[40px]  ml-5">
//           <p>
//             Start by connecting your favorite apps here so you can use them
//             instantly while creating workflows. Once connected, you can manage
//             and update all your connections right here.
//           </p>
//         </div>
//         </div>

//       </div>
//     </>
//   );
// }

// export default ConnectionsPage;
import React from "react";
import SideBar from "../component/SideBar";
import { Link } from "react-router-dom";

function ConnectionsPage() {
  return (
    <>
      <div className="flex">
        {/* left side content */}
        <div>
          <SideBar />
        </div>

        {/* right side content */}

        <div className="w-[95%] min-h-screen flex flex-col overflow-hidden">
          {/* Top bar */}
          <div className="w-full flex justify-end items-center h-12">
            <Link to="/">
              <div className="flex items-center gap-3 m-2 hover:bg-gray-800 border border-red-500 cursor-pointer px-3 py-1 rounded">
                <i
                  className="fa-solid fa-gift"
                  style={{ color: "#FFD43B" }}
                ></i>
                <p>Lifetime Free Access</p>
              </div>
            </Link>

            <Link to="/">
              <div className="flex items-center gap-3 px-4 m-2 border hover:bg-gray-800 cursor-pointer py-1 rounded">
                <i className="fa-solid fa-phone"></i>
                <p>Support</p>
              </div>
            </Link>
          </div>


          <div className="w-[75vw] mt-5 ml-5">
            <h3 className="text-lg font-semibold">Connections</h3>
          </div>


          <div className="w-[78vw] mt-2 ml-5">
            <p>
              Start by connecting your favorite apps here so you can use them
              instantly while creating workflows. Once connected, you can manage
              and update all your connections right here.
            </p>
          </div>
          <div >
            <button className="ml-5 mt-5 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700 duration-300">
              + Connect your first app
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConnectionsPage;
