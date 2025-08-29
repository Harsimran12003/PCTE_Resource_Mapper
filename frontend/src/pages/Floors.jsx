import Sidebar from "../components/Sidebar";
import floorIllustration from "/public/floors.png"; 
import floors1 from "/public/floors1.jpg"; 
import floors2 from "/public/floors2.jpg"; 

const Floors = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-purple-50 to-purple-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-15 py-6">
        <div className="flex flex-row w-[730px] max-w-[800px] h-[500px] rounded-3xl overflow-hidden bg-white shadow-md">
          
          {/* Left Side - Cards */}
          <div className="flex flex-col justify-center gap-7 w-1/2 bg-white p-8">
            {/* Card 1 */}
            <div className="hover:shadow-2xl bg-white rounded-2xl shadow-xl border-1 border-[#CC57E9] p-4 flex flex-col items-center text-center">
              <div className="w-full h-22 flex items-center justify-center mb-3">
                <img src={floors1} alt="Add Floor" className="w-40 h-full" />
              </div>
              <p className="text-gray-700 font-medium mb-4">
                Customize the number of floors
              </p>
              <button className="cursor-pointer w-full px-6 py-2 border-1 border-[#CC57E9] text-[#CC57E9] font-semibold rounded-full hover:bg-pink-100 transition bg-[#FFC0DB33] ">
                Add Floor
              </button>
            </div>

            {/* Card 2 */}
            <div className="hover:shadow-2xl bg-white rounded-2xl shadow-xl border-1 border-[#CC57E9] p-2 flex flex-col items-center text-center">
              <div className="w-full h-22 flex items-center justify-center mb-3">
                <img src={floors2} alt="View Floors" className="w-full h-full" />
              </div>
              <p className="text-gray-700 font-medium mb-4">
                Want to see all the floors of ET Block?
              </p>
              <button className="cursor-pointer w-full mb-2 px-6 py-2 border-1 border-[#CC57E9] text-[#CC57E9] font-semibold rounded-full hover:bg-pink-100 transition bg-[#FFC0DB33]">
                View Floors
              </button>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className="w-1/2  flex items-center justify-center ">
            <img
              src={floorIllustration}
              alt="Floors Illustration"
              className=" rounded-2xl object-cover w-full h-full opacity-75"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Floors;
