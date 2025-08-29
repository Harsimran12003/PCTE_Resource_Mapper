import React, { useState } from "react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="p-[4px] rounded-[32px] bg-gradient-to-tr from-[#98DCF0] via-[#C4ECF9] to-[#FFFFFF] shadow-2xl ">
        <div
          className="rounded-[30px] p-7 w-[330px] relative h-[480px]"
          style={{
            background: "linear-gradient(135deg, #ebe8e9ff 0%, #f1d6f8ff 100%)",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(50px)",
          }}
        >
          <h2 className="text-3xl font-bold text-purple-600 text-center mb-10 mt-8">
            Login
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block text-purple-600 font-semibold text-2xl mb-1">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full px-4 py-2 rounded-full text-sm bg-white/90 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-300 mt-2"
              />
            </div>

            <div>
              <label className="block text-purple-600 font-semibold text-2xl mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your Password"
                  className="w-full px-4 py-2 rounded-full text-sm bg-white/90 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-300 mt-2 pr-10"
                />
                <button
                  type="button"
                  className="absolute right-4 top-6.5 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword((prev) => !prev)}
                  tabIndex={-1}
                >
                  {showPassword ? (
                    // Eye open SVG
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  ) : (
                    // Eye closed SVG
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a9.956 9.956 0 012.223-3.592M6.634 6.634A9.956 9.956 0 0112 5c4.477 0 8.268 2.943 9.542 7a9.96 9.96 0 01-4.293 5.032M3 3l18 18"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <button
              
              type="submit"
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 rounded-full text-lg mt-3"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
