import React, { useEffect, useState } from 'react';
import { Rocket, Leaf, Settings, Wifi, Battery } from 'lucide-react';
import StatsSection from "../pages/StateSection";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs"
import FAQSection from "../pages/FAQSection"
import Testimonials from "../pages/Testimonials"
// --- Floating Background Particles ---
const FloatingParticles = () => {
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.5 + 0.1,
  }));


 



  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute bg-white rounded-full animate-float-particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

// --- Progress Ring (Updated: Text Centered) ---
const ProgressRing = ({ percentage, colorClass }) => {
  const radius = 18;
  const stroke = 3;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center w-9 h-9">
      <svg height={radius * 2} width={radius * 2} className="rotate-[-90deg]">
        <circle stroke="rgba(255,255,255,0.15)" strokeWidth={stroke} fill="transparent" r={normalizedRadius} cx={radius} cy={radius} />
        <circle stroke="currentColor" className={`${colorClass} transition-all duration-1000`} strokeWidth={stroke} strokeDasharray={`${circumference} ${circumference}`} style={{ strokeDashoffset }} strokeLinecap="round" fill="transparent" r={normalizedRadius} cx={radius} cy={radius} />
      </svg>
      {/* Centered Percentage Text */}
      <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-white">
        {percentage}%
      </span>
    </div>
  );
};

// --- Matchmaker Card ---
const MatchmakerCard = ({ icon: Icon, title, percentage, theme, delay }) => {
  const themes = {
    blue: {
      wrapper: "bg-blue-600/10 border-blue-500/20 text-blue-400 hover:border-blue-400/50 hover:bg-blue-600/20",
      icon: "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]",
      text: "text-blue-400",
    },
    green: {
      wrapper: "bg-emerald-600/10 border-emerald-500/20 text-emerald-400 hover:border-emerald-400/50 hover:bg-emerald-600/20",
      icon: "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]",
      text: "text-emerald-400",
    },
    orange: {
      wrapper: "bg-orange-600/10 border-orange-500/20 text-orange-400 hover:border-orange-400/50 hover:bg-orange-600/20",
      icon: "bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]",
      text: "text-orange-400",
    },
  };

  return (
    <div className={`group flex items-center justify-between p-2 pr-2 rounded-full border backdrop-blur-md min-w-[200px] transition-all duration-300 hover:scale-105 hover:shadow-lg animate-slideUp ${themes[theme].wrapper}`} style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards', opacity: 0 }}>
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-full text-white transition-transform duration-300 group-hover:rotate-12 ${themes[theme].icon}`}>
          <Icon size={16} />
        </div>
        <span className="text-sm font-semibold text-gray-100 whitespace-nowrap pl-1">{title}</span>
      </div>
      <ProgressRing percentage={percentage} colorClass={themes[theme].text} />
    </div>
  );
};

// --- Main Hero Section ---
export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);

  return (

<>
    
    <div className="min-h-screen bg-[#020203] text-white overflow-hidden relative font-sans selection:bg-cyan-500/30">
      <FloatingParticles />

 
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 py-12 lg:py-20 relative z-10 flex flex-col lg:flex-row items-center justify-between h-full">
        
        {/* --- LEFT SIDE: TEXT & CARDS --- */}
        <div className={`flex-1 max-w-2xl mb-16 lg:mb-0 pt-10 transition-all duration-1000 transform ${loaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
            Where Vision <br />
            Meets <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500 animate-gradient-x bg-[length:200%_200%]">Velocity</span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg max-w-md leading-relaxed">
            The bridge between world-changing ideas and people who make them happen.
          </p>

          <button className="relative group mt-10 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold text-white shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:scale-105 transition-all duration-300 overflow-hidden cursor-pointer">
            <span className="relative z-10">Join the Ecosystem</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <div className="mt-20">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Matchmaker
            </h3>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <MatchmakerCard icon={Rocket} title="I am a Founder" percentage={50} theme="blue" delay={200} />
              <MatchmakerCard icon={Leaf} title="I am an Investor" percentage={85} theme="green" delay={400} />
              <MatchmakerCard icon={Settings} title="Specialist" percentage={20} theme="orange" delay={600} />
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: iPAD WITH VIDEO --- */}
        <div className={`flex-1 w-full flex justify-center lg:justify-end relative transition-all duration-1000 delay-500 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
           
           {/* Background Glow Effect behind iPad */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] bg-blue-500/20 blur-[80px] rounded-full pointer-events-none"></div>

           {/* iPad Wrapper */}
           <div className="animate-ipad-float relative mx-auto h-[550px] w-[420px] rounded-[2rem] shadow-2xl max-w-full z-0 p-[5px] overflow-hidden">
             
             {/* GLOWING BORDER ANIMATION */}
             <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg,#ff00ff_90deg,#00ffff_180deg,#ffff00_270deg,transparent_360deg)] animate-spin-border opacity-100"></div>
             
             {/* iPad Screen Content */}
             <div className="relative h-full w-full bg-[#08090b] rounded-[1.7rem] flex flex-col overflow-hidden z-10">
              
              {/* iPad Status Bar */}
              <div className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 text-sm font-medium text-white/80 z-20 bg-gradient-to-b from-black/60 to-transparent">
                <span>9:41 AM</span>
                <div className="flex gap-3 items-center">
                  <Wifi size={16} />
                  <span className="text-xs">100%</span>
                  <Battery size={18} />
                </div>
              </div>

              {/* VIDEO PLAYER CONTAINER */}
              <div className="flex-1 w-full h-full relative">
                 <video 
                   className="w-full h-full object-cover" 
                   autoPlay 
                   loop 
                   muted 
                   playsInline
                 >
                   <source src="/Businessmen_Shaking_Hands_Video.mp4" type="video/mp4" />
                   Your browser does not support the video tag.
                 </video>
                 
                 {/* Optional: Overlay to blend video with dark theme */}
                 <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
              </div>

              {/* iPad Bottom Home Bar Indicator */}
              <div className="absolute bottom-2 left-0 w-full flex justify-center z-20">
                <div className="w-32 h-1.5 bg-white/50 rounded-full backdrop-blur-md"></div>
              </div>

             </div>
           </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes float-particle {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(0, -10px); }
        }
        @keyframes ipad-float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
        }
        @keyframes spin-border {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulse-slow {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.6; }
        }
        .animate-slideUp { animation: slideUp 0.8s ease-out forwards; }
        .animate-float-particle { animation: float-particle 6s ease-in-out infinite; }
        .animate-ipad-float { animation: ipad-float 6s ease-in-out infinite; }
        .animate-spin-border { animation: spin-border 4s linear infinite; }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
      `}</style>


     
    </div>




     <Testimonials/>
        <StatsSection/>
        <AboutUs/>
        <ContactUs/>
        <FAQSection/>

</>
  );
}