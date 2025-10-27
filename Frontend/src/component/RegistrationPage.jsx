// import React from "react";

function RegistrationPage() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[400px] p-6 border-2 border-gray-300 flex flex-col gap-4 bg-white shadow-lg rounded-md">
        <h1 className="text-2xl font-bold text-black text-center">Log in</h1>
        <p className="text-center">
          Need a Viasocket account?{" "}
          <a href="/register" className="text-blue-500 underline">
            Create an account
          </a>
        </p>

        {/* Google login button */}
        <div className="w-full h-[40px] flex items-center justify-center bg-black text-white rounded gap-2">
          <i className="fa-brands fa-google"></i>
          <span>Continue with Google</span>
        </div>

        {/* Password field */}
        <div className="w-full h-[40px] flex items-center justify-center bg-black text-white rounded gap-2">
          <i className="fa-solid fa-lock"></i>
          <span>Enter your password</span>
        </div>

        {/* Apple login */}
        <div className="w-full h-[40px] flex items-center justify-center bg-black text-white rounded gap-2">
          <i className="fa-brands fa-apple"></i>
          <span>Continue with Apple</span>
        </div>

        {/* OTP login */}
        <div className="w-full h-[40px] flex items-center justify-center bg-black text-white rounded gap-2">
          <i className="fa-brands fa-windows"></i>
          <span>Continue with OTP</span>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
