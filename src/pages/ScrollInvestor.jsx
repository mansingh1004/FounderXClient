import React from 'react';

// --- Data ---
const row1 = [
  { name: "Anthill Ventures", logo: "https://ui-avatars.com/api/?name=AV&background=c0392b&color=fff" },
  { name: "Chiratae Ventures", logo: "https://ui-avatars.com/api/?name=CV&background=e74c3c&color=fff" },
  { name: "Axilor Ventures", logo: "https://ui-avatars.com/api/?name=AV&background=e67e22&color=fff" },
  { name: "VentureEast", logo: "https://ui-avatars.com/api/?name=VE&background=27ae60&color=fff" },
  { name: "Shilling VC", logo: "https://ui-avatars.com/api/?name=SV&background=f1c40f&color=000" },
  { name: "Athena.vc", logo: "https://ui-avatars.com/api/?name=A&background=e74c3c&color=fff" },
];

const row2 = [
  { name: "Pontaq", logo: "https://ui-avatars.com/api/?name=P&background=3498db&color=fff" },  
  { name: "India Quotient", logo: "https://ui-avatars.com/api/?name=IQ&background=f39c12&color=fff" },
  { name: "Kedaara Capital", logo: "https://ui-avatars.com/api/?name=KC&background=16a085&color=fff" },
  { name: "Bertelsmann India", logo: "https://ui-avatars.com/api/?name=BI&background=c0392b&color=fff" },
  { name: "500 Startups", logo: "https://ui-avatars.com/api/?name=500&background=ecf0f1&color=000" },
  { name: "360 One", logo: "https://ui-avatars.com/api/?name=360&background=fff&color=000" },
];

// --- Components ---

const InvestorCard = ({ name, logo }) => (
  <div className="
    group flex items-center gap-4 px-6 py-4 min-w-[260px] rounded-xl cursor-pointer
    bg-white border border-gray-200 shadow-sm
    
    /* Animation & Transitions */
    transition-all duration-300 ease-out
    
    /* HOVER STATE: 'Best Style' effect */
    /* Upar uthega (lift), Shadow badhegi, Border color change hoga */
    hover:-translate-y-1 
    hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)] 
    hover:border-blue-500/50
    relative z-0 hover:z-10
  ">
    {/* Logo Container */}
    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center overflow-hidden shrink-0 border border-gray-100 group-hover:scale-110 transition-transform duration-300">
      <img src={logo} alt={name} className="w-full h-full object-cover" />
    </div>
    
    {/* Text Styling */}
    <span className="text-gray-700 font-semibold text-sm whitespace-nowrap group-hover:text-blue-600 transition-colors">
      {name}
    </span>
  </div>
);

const MarqueeRow = ({ items, direction = "left", speed = "normal" }) => {
  return (
    <div className="relative flex overflow-hidden w-full select-none group/row">
      
      {/* Wrapper that handles the animation */}
      <div 
        className={`flex gap-6 py-4 w-max hover:[animation-play-state:paused] ${
          direction === 'right' ? 'animate-marquee-right' : 'animate-marquee-left'
        }`}
        style={{ animationDuration: speed === 'slow' ? '60s' : '45s' }}
      >
        {/* Render items 3 times for seamless loop */}
        {[...items, ...items, ...items].map((item, idx) => (
          <InvestorCard key={`${item.name}-${idx}`} {...item} />
        ))}
      </div>

      {/* Gradient Overlay for Fade Effect - CHANGED TO WHITE */}
      <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-20" />
      <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-20" />
    </div>
  );
};

export default function VerifiedInvestors() {
  return (
    // Changed main background to WHITE
    <section className="bg-white min-h-[500px] flex flex-col justify-center py-16 overflow-hidden relative">
      
      {/* INJECTED CSS for animation */}
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 45s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 45s linear infinite;
        }
      `}</style>

      {/* Header - Changed text to Black/Dark Gray */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
          Connect With Verified Startup Investors
        </h2>
        <p className="text-gray-500 text-lg">
          Join thousands of founders raising capital
        </p>
      </div>

      {/* Rows Container */}
      <div className="flex flex-col gap-8">
        <MarqueeRow items={row1} direction="left" speed="normal" />
        <MarqueeRow items={row2} direction="right" speed="slow" />
      </div>
      
    </section>
  );
}