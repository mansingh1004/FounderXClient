import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const navigate=useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
<nav className="sticky top-0 z-50 w-full bg-[#f3f4f6] border-b border-gray-200 px-4 py-4 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Logo Section */}
        <div className="flex items-center space-x-2 flex-shrink-0 cursor-pointer">
          <div className="relative flex items-center h-8 w-10">
            <div className="absolute left-0 w-5 h-5 bg-[#3b82f6] rotate-45 rounded-sm"></div>
            <div className="absolute left-3 w-5 h-5 bg-[#14b8a6] rotate-45 rounded-sm"></div>
          </div>
          <span className="text-[#001d3d] font-bold text-xl tracking-tight hidden sm:block">
            FounderXConnect
          </span>
        </div>

        
       {/* Center: Search Bar */}
<div className="hidden md:flex flex-grow max-w-xl mx-8">
  <div className="relative w-full">
    {/* Search Icon */}
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
    
    {/* Input with Light Blue Border */}
    <input
      type="text"
      placeholder="SAAS in Berlin"
      className="block w-full pl-10 pr-2 py-3 bg-white placeholder-gray-400 
                 border border-sky-200 rounded-md 
                 focus:outline-none focus:ring-2 focus:ring-sky-100 focus:border-sky-400 
                 transition-all duration-200 sm:text-sm"
    />
  </div>
</div>

        {/* Right: Navigation Links & Login */}
        <div className="flex items-center space-x-6">
          <a href="#"   onClick={()=>{navigate("investorprofile")}} className="hidden lg:block text-[#001d3d] font-medium hover:text-[#ff7e21] transition-colors duration-200">
            Investors
          </a>
          <a href="#"   onClick={()=>{navigate("specialistprofile")}} className="hidden lg:block text-[#001d3d] font-medium hover:text-[#ff7e21] transition-colors duration-200">
            Specialists
          </a>
          
          {/* LOGIN BUTTON WITH HOVER */}
          <button  onClick={()=>{(navigate("/login"))}}   className="bg-[#ff7e21] hover:bg-[#e66d1a] text-white px-6 py-2 rounded-md font-semibold text-sm transition-all duration-300 ease-in-out hover:shadow-lg active:scale-95 transform hover:scale-105 whitespace-nowrap">
            Log in
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;