import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";


const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  

 const handleNav = (path) => {
    const token = localStorage.getItem("token");
    if (!token) {
      localStorage.setItem("redirectAfterLogin", path);
      navigate("/login");
    } else {
      navigate(path);
    }
  };

  
  // State to store user info
  const [user, setUser] = useState(null);

  useEffect(() => {
    const updateUser = () => {
      const name = localStorage.getItem("username");
      const token = localStorage.getItem("token");
      if (token && name) {
        setUser(name);
      }
    };

    updateUser(); // page load par

    window.addEventListener("user-logged-in", updateUser);

    return () => {
      window.removeEventListener("user-logged-in", updateUser);
    };
  }, []);

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUser(null);
    window.dispatchEvent(new Event("user-logged-out"));
    navigate("/login");
    toast.success("Logout Successful!");
    setIsMenuOpen(false); // Close menu on logout
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#f3f4f6] border-b border-gray-200 px-4 py-4 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Logo Section */}
        <div className="flex items-center space-x-2 flex-shrink-0 cursor-pointer" onClick={() => navigate("/")}>
          <div className="relative flex items-center h-8 w-10">
            <div className="absolute left-0 w-5 h-5 bg-[#3b82f6] rotate-45 rounded-sm"></div>
            <div className="absolute left-3 w-5 h-5 bg-[#14b8a6] rotate-45 rounded-sm"></div>
          </div>
          {/* Logo Text - Visible on all screens now or keep hidden on very small if needed */}
          <span className="text-[#001d3d] font-bold text-xl tracking-tight block">
            FounderXConnect
          </span>
        </div>

        {/* Center: Search Bar (Desktop Only) */}
        {/* <div className="hidden md:flex flex-grow max-w-xl mx-8">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="SAAS in Berlin"
              className="block w-full pl-10 pr-2 py-3 bg-white border border-sky-200 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-100 focus:border-sky-400 transition-all duration-200 sm:text-sm"
            />
          </div>
        </div> */}


           


        {/* Right: Navigation & Auth (Desktop) */}
        <div className="flex items-center space-x-6">
          <button
          
          // onClick={() => navigate("investorprofile")}
          onClick={() => handleNav("home")}
          
          className="hidden lg:block text-[#001d3d] font-medium hover:text-[#ff7e21] transition-colors">
            Home
          </button>
          <button  
          //  onClick={() => navigate("specialistprofile")}
          onClick={() => handleNav("specialistprofile")}
          
          className="hidden lg:block text-[#001d3d] font-medium hover:text-[#ff7e21] transition-colors">
          About Us
          </button>


            <button  
          //  onClick={() => navigate("specialistprofile")}
          onClick={() => handleNav("features")}
          
          className="hidden lg:block text-[#001d3d] font-medium hover:text-[#ff7e21] transition-colors">
          Features
          </button>
          



            <button  
          //  onClick={() => navigate("specialistprofile")}
          // onClick={() => handleNav("specialistprofile")}
          
          className="hidden lg:block text-[#001d3d] font-medium hover:text-[#ff7e21] transition-colors">
          Testimonials

          </button>
          {/* Desktop User Profile */}
          {user ? (
            <div 
             className="hidden md:flex items-center space-x-4 cursor-pointer"


    // onMouseEnter={() => {
    //   window.location.href = "/profile"; }}


   
    
    >







              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold">
                  {user.charAt(0).toUpperCase()}
                </div>
                <span className="text-[#001d3d] font-semibold">{user}</span>
              </div>

           









              <button 
                onClick={handleLogout}
                className="text-sm text-red-500 font-medium hover:underline"
              >
                Logout
              </button>
            </div>
          ) : (
            <button 
              onClick={() => navigate("/login")} 
              className="hidden md:block bg-[#ff7e21] hover:bg-[#e66d1a] text-white px-6 py-2 rounded-md font-semibold text-sm transition-all duration-300 active:scale-95"
            >
              Log in
            </button>
          )}

          {/* Mobile Menu Toggle Button */}
          <button className="md:hidden text-gray-600 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              // Close Icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ========================================== */}
      {/* MOBILE MENU DROPDOWN (This renders when isMenuOpen is true) */}
      {/* ========================================== */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg flex flex-col px-4 py-4 space-y-4">
          
          {/* 1. Mobile User Profile Section - NAME SHOWN HERE */}





          {user ?
          
          (
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {user.charAt(0).toUpperCase()}
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-xs">Logged in as</span>
                  <span className="text-[#001d3d] font-bold text-lg">{user}</span>
                </div>
              </div>
              <button 
                onClick={handleLogout}
                className="text-sm text-red-500 border border-red-200 px-3 py-1 rounded-md hover:bg-red-50"
              >
                Logout
              </button>
            </div>
          )
          
          
          
          : (
            <div className="pb-2">
              <button 
                onClick={() => { navigate("/login"); setIsMenuOpen(false); }} 
                className="w-full bg-[#ff7e21] text-white px-6 py-3 rounded-md font-semibold"
              >
                Log in
              </button>
            </div>
          )}

          {/* 2. Mobile Search Bar */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search SAAS, Investors..."
              className="block w-full pl-4 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:border-sky-400"
            />
          </div>

          {/* 3. Mobile Navigation Links */}
          <div className="flex flex-col space-y-2">
            <button

            //  onClick={() => { navigate("investorprofile");setIsMenuOpen(false); }}
             onClick={() => handleProtectedNav("/investorprofile")}
             
             className="text-left text-[#001d3d] font-medium py-2 hover:bg-gray-50 rounded px-2">
              Investors
            </button>
            <button 
            // onClick={() => { navigate("specialistprofile"); setIsMenuOpen(false); }}
                         onClick={() => handleProtectedNav("/specialistprofile")}

            
            className="text-left text-[#001d3d] font-medium py-2 hover:bg-gray-50 rounded px-2">
              Specialists
            </button>
          </div>

        </div>
      )}
    </nav>
  );
};

export default Header;