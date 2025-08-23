import Sidebar from "../components/Sidebar";
import { FaSearch } from "react-icons/fa";


const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 ml-[15px] mr-[15px]">
        {/* Top Search Bar */}
        <div className="flex items-center mb-8">
          <div className="flex items-center w-full max-w-md px-4 py-2 bg-white/70 rounded-full border border-purple-400 shadow-md">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-500"
            />
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <img
            src="./public/hero_image.jpg"
            alt="classroom"
            className="rounded-2xl w-full h-60 object-cover"
            style={{
              boxShadow: "0px 10px 7.8px rgba(136, 116, 215, 0.81)"
            }}
          />
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-30">
          <div className="p-[2px] rounded-2xl bg-gradient-to-r from-[#7B0FFF] to-[#F70DE4]">
            <div className="p-6 bg-white rounded-2xl shadow-md text-center">
              <h3 className="text-pink-600 font-bold text-lg">Total Classrooms</h3>
              <p className="text-2xl font-bold text-gray-800 mt-2">0</p>
            </div>
          </div>
          <div className="p-[2px] rounded-2xl bg-gradient-to-r from-[#7B0FFF] to-[#F70DE4]">
            <div className="p-6 bg-white rounded-2xl shadow-md text-center">
              <h3 className="text-pink-600 font-bold text-lg">Total Floors</h3>
              <p className="text-2xl font-bold text-gray-800 mt-2">0</p>
            </div>
          </div>
          <div className="p-[2px] rounded-2xl bg-gradient-to-r from-[#7B0FFF] to-[#F70DE4]">
            <div className="p-6 bg-white rounded-2xl shadow-md text-center">
              <h3 className="text-pink-600 font-bold text-lg">Total Resources</h3>
              <p className="text-2xl font-bold text-gray-800 mt-2">0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
