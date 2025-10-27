// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Marquee from "react-fast-marquee";
import WorkFlowImg from "../images/feature.png";
import {
  faIndianRupeeSign,
  faBullhorn,
  faHeadphones,
  faPeopleRoof,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

function Feature() {
     const companies = [
    "One Hash Chat",
    "Way We Do",
    "Klear",
    "Google Sheets",
    "Shopify",
    "Razorpay",
    "Juat Call",
    "Zoho Project",
    "Filestage",
    "PHP Point of Sale",
    "Elastic Email",
    "Neoreach",
    "Traackr",
    "Airtable",
  ];
  return (
    <>
      <div >
        <div className="w-full h-[36px] mt-[20px] mb-[20px] flex items-center" >
          <h2 className="text-4xl text-black">
            Get started with ready-made templates
          </h2>
        </div>

        {/* Feature cards wrapper */}
        <div className="flex flex-wrap justify-between  w-[90%] mx-auto cursor-pointer">
          {/* Feature Card 1 */}
          <div className="flex flex-col w-[20%] h-[90px] border-2 border-gray-200">
            <div className=" flex  items-center px-2 w-full h-1/2">
              <FontAwesomeIcon icon={faIndianRupeeSign} />
              <div>Finance</div>
            </div>
            <div className="text-sm mt-1 ml-4">Quick and simple approval</div>
          </div>

          {/* Feature Card 2 */}
          <div className="flex flex-col w-[20%] h-[90px] border-2 border-gray-200 ">
            <div className=" flex  items-center px-2 w-full h-1/2">
              <FontAwesomeIcon icon={faBullhorn} />
              <div>Marketing</div>
            </div>
            <div className="text-sm mt-1 ml-4">
              Boost social media engagement
            </div>
          </div>

          {/* Feature Card 3 */}
          <div className="flex flex-col w-[20%] h-[90px] border-2 border-gray-200">
            <div className=" flex  items-center px-2 w-full h-1/2">
              <FontAwesomeIcon icon={faHeadphones} />
              <div>Support</div>
            </div>
            <div className="text-sm mt-1 ml-4">
              Efficiently manage support tickets
            </div>
          </div>

          {/* Feature Card 4 */}
          <div className="flex flex-col w-[20%] h-[90px] border-2 border-gray-200">
            <div className=" flex  items-center px-2 w-full h-1/2">
              <FontAwesomeIcon icon={faPeopleRoof} />
              <div>Project Management</div>
            </div>
            <div className="text-sm mt-1 ml-4">Instant bug alerts on Slack</div>
          </div>

          {/* Feature Card 5 */}
          <div className="flex flex-col w-[20%] h-[90px] border-2 border-gray-200">
            <div className=" flex  items-center px-2 w-full h-1/2">
              <FontAwesomeIcon icon={faUserGroup} />
              <div>HR</div>
            </div>
            <div className="text-sm mt-1 ml-4">On-board new employees</div>
          </div>
        </div>

        {/* ///// work flow image  */}
        <div className="h-[90vh]  w-[90%] mx-auto bg-gray-100">
          <img
            className=" w-full h-full object-contain"
            src={WorkFlowImg}
            alt="Work Flow Img"
          />
        </div>
        <div className="h-[10vh]  w-[89vw] flex justify-end mx-auto bg-gray-100">
          <button className="w-[147px] h-[45px] bg-red-700 text-white border-2 border-gray-200 m-2">
            Use this template
          </button>

          <button className="w-[147px] h-[45px]  text-black border-2 border-gray-200 m-2">
            See All Template
          </button>
        </div>

        <div className="h-[30vh] w-[89vw] mx-auto ">
          <div>
            <h2 className="text-4xl text-black ">
              Connect your apps and automate workflows in just a few <br />
              clicks
            </h2>
          </div>

          <div>
            <p className="text-2xl text-black ">
              {" "}
              Connect your favorite apps and watch them work like a dream team.
              No coding, no headaches, just smooth integrations that actually
              make sense.
            </p>
          </div>

          <div>
            <button className="w-[147px] h-[45px] bg-red-700 text-white border-2 border-gray-200 m-2 cursor-pointer">
              Browse all apps
            </button>
          </div>
        </div>

        <div className="bg-gray-100  py-4">
             <Marquee pauseOnHover={true} speed={60} gradient={false}>
                {companies.map((company, index) =>(
                    <span key={index} className="mx-8 text-lg font-semibold text-gray-700" >{company} </span>
                ))}
                
                </Marquee> 

                  </div>
      </div>
    </>
  );
}

export default Feature;
