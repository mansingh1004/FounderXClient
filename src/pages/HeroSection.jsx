
import netimage from "../images/fontpage.png" 
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import BackEnd from "../config/BackEnd"
import axios from "axios";
const HeroSection = () => {

    const navigate=useNavigate()

    
const handleProtectedNav = (path) => {
  const token = localStorage.getItem("token");
  if (!token) {
    localStorage.setItem("redirectAfterLogin", path);
    navigate("/login");
  } else {
    navigate(path);
  }
};


const authCheck = async () => {
  const api = `${BackEnd}/user/authuser`;
  const token = localStorage.getItem("token");

  if (token) {
    try {
      const tokenResponse = await axios.post(api, null, {
        headers: { "x-auth-token": token }
      });

      if (tokenResponse.data && tokenResponse.data._id) {
        localStorage.setItem("userValid", true);
        localStorage.setItem("username", tokenResponse.data.name);
        localStorage.setItem("useremail", tokenResponse.data.email);
        localStorage.setItem("userid", tokenResponse.data._id);
      } else {
        localStorage.clear(); // or remove token if needed
        console.log("User not valid");
      }

    } catch (error) {
      console.error("Auth Check Failed:", error.response?.data || error.message);
      localStorage.clear(); // Remove invalid token
    }
  }
};

useEffect(()=>{

  authCheck()
}, []);

  
  return (
    <div className="bg-[#0a0909] min-h-screen px-6 py-12 md:px-20 lg:px-32 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Content: Text and Network Illustration */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
          
          {/* Left Side: Text */}
          <div className="flex-1 text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold text-[rgb(246,249,252)] leading-tight mb-4">
              Where Vision <br /> 
              Meets <span className="text-[#ff7e21]">Velocity</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-md mb-8 leading-relaxed">
              The bridge between world-changing ideas and people who make them happen.
            </p>
            <button className="bg-gradient-to-r from-[#1e40af] to-[#2dd4bf] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
              Join the Ecosystem
            </button>
          </div>

          {/* Right Side: Network Graphic Placeholder */}
          {/* Note: In a real app, you would use an SVG or the image I generated earlier here */}
         <div className="flex-1 relative">
  <img 
    src={netimage}
    alt="Network Illustration"
    className="w-full h-auto drop-shadow-xl move-around"
  />
</div>

        </div>

        {/* Bottom Content: Matchmaker Section */}
        <div className="mt-10">
          <h3 className="text-[#001d3d] text-2xl font-bold mb-6">Matchmaker</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Founder */}
            <div className="bg-[#1e4ea1] rounded-2xl p-8 h-48 flex flex-col items-center justify-center relative group cursor-pointer hover:shadow-2xl transition-all">
              <div className="text-white mb-2">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
<p
  // onClick={() => navigate("/founder")}
onClick={() => handleProtectedNav("/founder")}
  className="text-white font-semibold cursor-pointer"
>
  I am a Founder
</p>              <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-white/30 rounded-full flex items-center justify-center">
                <div className="w-full h-full border-t-2 border-white rounded-full animate-spin-slow"></div>
              </div>
            </div>

            {/* Card 2: Investor */}
            <div className="bg-[#48bb95] rounded-2xl p-8 h-48 flex flex-col items-center justify-center relative group cursor-pointer hover:shadow-2xl transition-all">
              <div className="text-white mb-2">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <p 
              
              // onClick={() => navigate("/investorprofile")} 
onClick={() => handleProtectedNav("/investorprofile")}
              
              className="text-white font-semibold">I am an Investor</p>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-white/30 rounded-full flex items-center justify-center">
                <div className="w-full h-full border-t-2 border-white rounded-full"></div>
              </div>
            </div>

            {/* Card 3: Specialist */}
            <div className="bg-[#e67e35] rounded-2xl p-8 h-48 flex flex-col items-center justify-center relative group cursor-pointer hover:shadow-2xl transition-all">
              <div className="text-white mb-2">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <p  
              
              // onClick={() => navigate("/specialistprofile")}  
              onClick={() => handleProtectedNav("/specialistprofile")}

              
              className="text-white font-semibold">I am a Specialist</p>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-white/30 rounded-full flex items-center justify-center">
                <div className="w-full h-full border-t-2 border-white rounded-full"></div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;