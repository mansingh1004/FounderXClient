import React from 'react';
import { Users, Briefcase, Share2, BrainCircuit, Wifi, Battery } from 'lucide-react';

const StartupLanding = () => {
  return (
    <div className="min-h-screen bg-[#f4f6fa] text-gray-900 p-4 md:p-8 flex flex-col items-center justify-center font-sans overflow-hidden">
      
      {/* Injecting custom animation styles */}
      <style>{`
        /* Existing Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin-border {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        /* NEW: Slide In Animations */
        @keyframes slide-in-left {
            0% { opacity: 0; transform: translateX(-100px); }
            100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
            0% { opacity: 0; transform: translateX(100px); }
            100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes pop-in {
            0% { opacity: 0; transform: scale(0.8) translateY(50px); }
            100% { opacity: 1; transform: scale(1) translateY(0); }
        }

        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-spin-border { animation: spin-border 4s linear infinite; }
        
        /* Animation Classes */
        .animate-slide-in-left { animation: slide-in-left 1s ease-out forwards; opacity: 0; }
        .animate-slide-in-right { animation: slide-in-right 1s ease-out forwards; opacity: 0; }
        .animate-pop-in { animation: pop-in 1s ease-out forwards; opacity: 0; }

        .delay-200 { animation-delay: 200ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-600 { animation-delay: 600ms; }
      `}</style>

      {/* --- NEW HEADER SECTION (Added above the grid) --- */}
      <div className="max-w-3xl mx-auto text-center mb-16 relative z-10 mt-10 animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 tracking-tight">
          Our Offerings
        </h2>
        <p className="text-lg text-gray-500 leading-relaxed px-4">
          Explore FounderXConnect's core features, designed to empower your startup 
          journey, from finding the right partners to securing investment and getting 
          expert advice.
        </p>
      </div>

      {/* Main Grid Container */}
      <div className="max-w-[85rem] w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10 mb-10">
        
        {/* Left Column - Features (Slides in from LEFT) */}
        <div className="flex flex-col gap-6 order-2 lg:order-1 animate-slide-in-left delay-200">
          <FeatureCard 
            icon={<Users size={24} className="text-white" />}
            iconBg="bg-blue-600"
            title="Find a Co-Founder"
            description="Discover like-minded partners using our intuitive tools to find cofounder for startup success."
          />
          <FeatureCard 
            icon={<Share2 size={24} className="text-white" />}
            iconBg="bg-purple-600"
            title="Manage Your Startup Profile"
            description="Keep your startup details up to date and attract investors. A well-managed profile boosts your visibility."
          />
        </div>

        {/* Center Column - iPad / Tablet Mockup (Pops up from center) */}
        <div className="flex justify-center order-1 lg:order-2 py-8 lg:py-0 relative animate-pop-in delay-400">
          
          {/* Background Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>

          {/* iPad Device Frame Wrapper with Border Animation */}
          <div className="animate-float relative mx-auto h-[640px] w-[460px] rounded-[2rem] shadow-2xl max-w-full z-0 p-[6px] overflow-hidden bg-gray-900">
            
             {/* THE GLOWING BORDER ANIMATION LAYER */}
             <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg,#3b82f6_90deg,#06b6d4_180deg,#8b5cf6_270deg,transparent_360deg)] animate-spin-border opacity-100"></div>

             {/* iPad Inner Screen (Black Bezel + Screen) */}
             <div className="relative h-full w-full bg-black rounded-[1.7rem] overflow-hidden z-10 p-[12px]">
                
                {/* Actual Screen Area */}
                <div className="h-full w-full bg-white rounded-[1rem] relative flex flex-col overflow-hidden">
                  
                  {/* iPad Status Bar */}
                  <div className="flex justify-between items-center px-6 py-4 text-sm font-medium text-gray-500 bg-white z-20">
                    <span>9:41 AM</span>
                    <div className="flex gap-3 items-center">
                      <Wifi size={16} />
                      <span className="text-xs">100%</span>
                      <Battery size={18} />
                    </div>
                  </div>

                  {/* Screen Main Content */}
                  <div className="flex-1 flex flex-col items-center justify-center p-8 text-center animate-fade-in-up delay-600 bg-gradient-to-b from-white to-gray-50">
                    
                    {/* FounderXConnect Logo Style */}
                    <div className="mb-8 relative hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer">
                      <div className="flex items-center justify-center relative">
                         <div className="w-12 h-12 bg-cyan-400 rounded-lg transform rotate-45 mix-blend-multiply opacity-90"></div>
                         <div className="w-12 h-12 bg-blue-600 rounded-lg transform rotate-45 -ml-6 mix-blend-multiply opacity-90 shadow-lg"></div>
                      </div>
                    </div>

                    <h2 className="text-3xl font-extrabold leading-tight text-gray-900 mb-3 drop-shadow-sm">
                      FounderXConnect
                    </h2>
                    
                    <h3 className="text-lg font-semibold text-blue-600 mb-6">
                      Build the next Big Thing
                    </h3>
                    
                    <p className="text-gray-500 mb-8 max-w-[280px] mx-auto">
                      Connect, Collaborate, and Scale with the #1 platform for founders.
                    </p>

                    {/* Call to Action Button inside iPad */}
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-all hover:shadow-lg hover:shadow-blue-500/30 active:scale-95 transform">
                      Get Started
                    </button>
                  </div>

                  {/* iPad Bottom Home Bar Indicator */}
                  <div className="w-full flex justify-center pb-4 bg-gray-50">
                    <div className="w-32 h-1.5 bg-gray-300 rounded-full"></div>
                  </div>

                </div>
             </div>
          </div>
        </div>

        {/* Right Column - Features (Slides in from RIGHT) */}
        <div className="flex flex-col gap-6 order-3 animate-slide-in-right delay-200">
          <FeatureCard 
            icon={<Briefcase size={24} className="text-white" />}
            iconBg="bg-green-600"
            title="Connect with Investors"
            description="Seamlessly pitch startup idea to investors and incubators curated for your mission."
          />
          <FeatureCard 
            icon={<BrainCircuit size={24} className="text-white" />}
            iconBg="bg-orange-600"
            title="Collaborate in Projects"
            description="Connect with like-minded founders, build your dream team, and turn your startup vision into reality."
          />
        </div>

      </div>
    </div>
  );
};

// Reusable Feature Card Component
const FeatureCard = ({ icon, iconBg, title, description }) => {
  return (
    <div 
      className="bg-white p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 shadow-sm group hover:-translate-y-1"
    >
      <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default StartupLanding;