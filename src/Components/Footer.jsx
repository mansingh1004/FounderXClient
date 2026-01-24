import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 font-sans relative overflow-hidden">
      
      {/* Background Glow - Visible on all, optimized opacity */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-[#3b82f6] opacity-20 blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        
        {/* GRID SYSTEM EXPLAINED:
           1. Mobile (default): grid-cols-1 (Everything stacked)
           2. Tablet (md): grid-cols-2 (2 items per row)
           3. Laptop (lg): grid-cols-12 (Complex layout for wide screens)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-8 mb-12 lg:mb-16">
          
          {/* ======================= */}
          {/* 1. BRAND SECTION        */}
          {/* ======================= */}
          {/* Mobile: 1 col, Tablet: 1 col, Laptop: 4 cols */}
          <div className="col-span-1 lg:col-span-4 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative flex items-center justify-center h-10 w-10 bg-slate-800 rounded-xl border border-slate-700 shadow-sm">
                <div className="absolute w-4 h-4 bg-[#3b82f6] rotate-45 rounded-sm -translate-x-1"></div>
                <div className="absolute w-4 h-4 bg-[#14b8a6] rotate-45 rounded-sm translate-x-1 mix-blend-screen"></div>
              </div>
              <span className="font-bold text-2xl text-white tracking-tight">
                FounderX<span className="text-[#3b82f6]">Connect</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              The ecosystem where vision meets velocity. We bridge the gap between ambitious founders, strategic investors, and world-class specialists.
            </p>
            
            <div className="flex space-x-4 pt-2">
              {[FaTwitter, FaLinkedin, FaGithub, FaDiscord].map((Icon, idx) => (
                <a key={idx} href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-[#3b82f6] hover:text-white hover:-translate-y-1 transition-all duration-300 border border-slate-700 hover:border-[#3b82f6]">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* ======================= */}
          {/* 2. PLATFORM LINKS       */}
          {/* ======================= */}
          {/* Mobile: 1 col, Tablet: 1 col, Laptop: 2 cols */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="font-semibold text-white mb-6 uppercase text-xs tracking-wider">Platform</h4>
            <ul className="space-y-3">
              {['For Founders', 'For Investors', 'Specialists', 'Success Stories'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white hover:text-[#ff7e21] transition-colors duration-200 block text-sm hover:translate-x-1">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ======================= */}
          {/* 3. COMPANY LINKS        */}
          {/* ======================= */}
          {/* Mobile: 1 col, Tablet: 1 col, Laptop: 2 cols */}
          <div className="col-span-1 lg:col-span-2">
            <h4 className="font-semibold text-white mb-6 uppercase text-xs tracking-wider">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white hover:text-[#ff7e21] transition-colors duration-200 block text-sm hover:translate-x-1">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ======================= */}
          {/* 4. NEWSLETTER           */}
          {/* ======================= */}
          {/* Mobile: 1 col
             Tablet: col-span-2 (Full width on tablet looks better for forms)
             Laptop: col-span-4 
          */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4">
            <h4 className="font-semibold text-white mb-4 text-lg">Stay in the loop</h4>
            <p className="text-slate-400 text-sm mb-6 max-w-sm">
              Join 10,000+ founders receiving our weekly ecosystem updates.
            </p>
            
            <form className="relative flex items-center max-w-sm">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-slate-800 text-white pl-4 pr-32 py-3 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/50 focus:border-transparent transition-all placeholder-slate-500 text-sm"
              />
              <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#ff7e21] hover:bg-[#e66d1a] text-white px-4 rounded-md font-medium text-xs transition-all shadow-lg hover:shadow-orange-500/20 active:scale-95">
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-xs text-slate-500">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* ======================= */}
        {/* BOTTOM COPYRIGHT        */}
        {/* ======================= */}
        {/* Mobile: Flex-Col (Stacked), Tablet/Laptop: Flex-Row (Side by side) */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} FounderXConnect. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-500 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;