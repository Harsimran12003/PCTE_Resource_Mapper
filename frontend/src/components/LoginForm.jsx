const LoginForm = () => {
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
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-full px-4 py-2 rounded-full text-sm bg-white/90 placeholder-gray-400 outline-none focus:ring-2 focus:ring-purple-300 mt-2"
              />
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
