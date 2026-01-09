import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#001d3d] text-white pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Description */}
          <div className="space-y-4">
            {/* Logo Construction (Adapted for Dark Background) */}
            <div className="flex items-center space-x-2">
              <div className="relative flex items-center h-8 w-10">
                <div className="absolute left-0 w-5 h-5 bg-[#3b82f6] rotate-45 rounded-sm"></div>
                <div className="absolute left-3 w-5 h-5 bg-[#14b8a6] rotate-45 rounded-sm"></div>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                FounderXConnect
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              The ecosystem where vision meets velocity. Connecting founders, investors, and specialists to build the future.
            </p>
          </div>

          {/* Column 2: Platform Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#ff7e21]">Platform</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">For Founders</a></li>
              <li><a href="#" className="hover:text-white transition-colors">For Investors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">For Specialists</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#ff7e21]">Company</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#ff7e21]">Stay Connected</h4>
            <p className="text-gray-400 text-sm mb-4">
              Join our newsletter for the latest ecosystem updates.
            </p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-[#002a55] text-white px-4 py-2 rounded border border-gray-700 focus:outline-none focus:border-[#ff7e21] transition-colors text-sm"
              />
              <button className="bg-[#ff7e21] hover:bg-[#e66d1a] text-white px-4 py-2 rounded font-semibold text-sm transition-all shadow-md">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} FounderXConnect. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;