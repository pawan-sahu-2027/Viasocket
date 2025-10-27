import logo from "../images/logo - Copy.jpg";
import Login from "./Login";
function Navbar() {
  return (
    <>
      <div className="bg-white-500">
        <div className="w-full h-10 bg-blue-800 text-white flex justify-center items-center">
          <p>Avail Lifetime Free Access - Limited Time Period Offer</p>
        </div>
        <div className=" navbar bg-base-100 shadow-sm bg-white  text-black flex justify-between items-center " style={{ backgroundColor: "#F8F4FF" }}>
          <div className=" navbar-start navbar-start h-[46px] w-[180px]">
            <img
              className=" w-full h-full object-contain"
              src={logo}
              alt="Logo"
            />
          </div>
          <div className="flex justify-end items-center gap-4 " >
            <ul className="flex items-center gap-4 flex-row-reverse px-1 ">
              <li>
                <a className="cursor-pointer">Home </a>
              </li>
              <li>
                <a className="cursor-pointer">Templates </a>
              </li>
              <li>
                <a className="cursor-pointer">Explore </a>
              </li>
              <li>
                <a className="cursor-pointer">Apps </a>
              </li>
              <li>
                <a className="cursor-pointer">Pricing </a>
              </li>

              <li>
                <a className="cursor-pointer">SignUp </a>
              </li>
            </ul>
            <div className="navbar-end">
              <a
                className="btn"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </a>
              <Login />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
