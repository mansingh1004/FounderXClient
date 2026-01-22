// import React, { useState, useEffect, useRef } from 'react';

// // Helper component for individual counters to keep code clean
// const CounterItem = ({ end, duration, prefix = "", suffix = "", icon, label, color }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let startTimestamp = null;
//     const step = (timestamp) => {
//       if (!startTimestamp) startTimestamp = timestamp;
//       const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
//       // Calculate current number based on progress
//       setCount(Math.floor(progress * end));

//       if (progress < 1) {
//         window.requestAnimationFrame(step);
//       }
//     };
//     window.requestAnimationFrame(step);
//   }, [end, duration]);

//   return (
//     <div className="mx-auto flex max-w-xs flex-col gap-y-4 items-center p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gray-50 border border-gray-100">
//       <div className={`p-3 rounded-full bg-white shadow-sm ${color} bg-opacity-10`}>
//         {icon}
//       </div>
      
//       <dd className={`order-first text-5xl font-bold tracking-tight ${color}`}>
//         {prefix}{count}{suffix}
//       </dd>
      
//       <dt className="text-base leading-7 text-gray-600 font-medium uppercase tracking-wide">
//         {label}
//       </dt>
//     </div>
//   );
// };

// const StatsSection = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   // Scroll Trigger Logic
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         // Only trigger if intersecting and not already triggered
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.disconnect(); // Stop observing once triggered (runs only once)
//         }
//       },
//       { threshold: 0.3 } // Trigger when 30% of the section is visible
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) observer.unobserve(sectionRef.current);
//     };
//   }, []);

//   const stats = [
//     {
//       id: 1,
//       label: 'Founders Joined',
//       target: 500,    // The number to count to
//       prefix: '',
//       suffix: '+',
//       color: "text-blue-600",
//       icon: (
//         <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//         </svg>
//       )
//     },
//     {
//       id: 2,
//       label: 'Active Investors',
//       target: 200,
//       prefix: '',
//       suffix: '+',
//       color: "text-emerald-500",
//       icon: (
//         <svg className="h-8 w-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//         </svg>
//       )
//     },
//     {
//       id: 3,
//       label: 'Funds Raised',
//       target: 5,
//       prefix: '$',
//       suffix: 'M+',
//       color: "text-orange-500",
//       icon: (
//         <svg className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//       )
//     },
//   ];

//   return (
//     <div ref={sectionRef} className="bg-white py-10 sm:py-16">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
//         <div className="mx-auto max-w-2xl lg:max-w-none text-center mb-10">
//           <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//             Trusted by the Ecosystem
//           </h2>
//           <p className="mt-4 text-lg leading-8 text-gray-600">
//             Connecting visionaries with the resources they need to scale.
//           </p>
//         </div>

//         <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
//           {stats.map((stat) => (
//             // Only render the counter logic if the section is visible
//             isVisible ? (
//               <CounterItem 
//                 key={stat.id}
//                 end={stat.target}
//                 duration={2000} // Animation lasts 2 seconds
//                 prefix={stat.prefix}
//                 suffix={stat.suffix}
//                 icon={stat.icon}
//                 label={stat.label}
//                 color={stat.color}
//               />
//             ) : (
//               // Static '0' state before scrolling
//               <div 
//                 key={stat.id} 
//                 className="mx-auto flex max-w-xs flex-col gap-y-4 items-center p-6 rounded-2xl bg-gray-50 border border-gray-100 opacity-50"
//               >
//                 <div className={`p-3 rounded-full bg-white shadow-sm ${stat.color} bg-opacity-10`}>
//                   {stat.icon}
//                 </div>
//                 <dd className={`order-first text-5xl font-bold tracking-tight ${stat.color}`}>
//                   {stat.prefix}0{stat.suffix}
//                 </dd>
//                 <dt className="text-base leading-7 text-gray-600 font-medium uppercase tracking-wide">
//                   {stat.label}
//                 </dt>
//               </div>
//             )
//           ))}
//         </dl>
//       </div>
//     </div>
//   );
// }

// export default StatsSection;


























import React, { useState } from 'react';
import { 
  Users, 
  Briefcase, 
  Link2, 
  Rocket, 
  Wifi, 
  Battery, 
  UserPlus,
  Eye, 
  EyeOff 
} from 'lucide-react';

const TrustedSection = () => {
  // Live state for the inputs inside the iPad
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans flex items-center justify-center p-4 md:p-8 overflow-hidden">
      
      {/* Injecting animation styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-ipad-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Main Container */}
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* --- LEFT SIDE: Content & Stats --- */}
        <div className="space-y-8 order-2 lg:order-1">
          
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Trusted by 10,000+ Founders & <br className="hidden md:block" />
            500+ Investors
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
            As a premier hub for startup matchmaking India, <span className="text-blue-600 font-semibold">FounderXConnect</span> is where 
            founders link up with co-founders, investors, and collaborators to turn ideas 
            into real startups—fast, efficiently, and hassle-free.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
            <StatItem icon={<Users className="text-blue-600" />} count="10,000+" label="Founders" />
            <StatItem icon={<Briefcase className="text-blue-600" />} count="500+" label="Investors" />
            <StatItem icon={<Link2 className="text-blue-600" />} count="1,500+" label="Total Matches" />
            <StatItem icon={<Rocket className="text-blue-600" />} count="2k" label="Startup Pitched" />
          </div>

          <div className="pt-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-600/30 transform hover:-translate-y-1">
              Create Free Account
            </button>
          </div>
        </div>

        {/* --- RIGHT SIDE: iPad Mockup (Animated) --- */}
        <div className="flex justify-center order-1 lg:order-2 relative">
          
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[600px] bg-gradient-to-tr from-blue-200/40 to-cyan-200/40 blur-[80px] rounded-full pointer-events-none"></div>

          {/* iPad Frame */}
          <div className="animate-ipad-float relative border-[10px] border-gray-800 rounded-[2.5rem] h-[640px] w-[460px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] bg-gray-900 overflow-hidden ring-1 ring-gray-900/50">
            
            {/* Screen Content */}
            <div className="h-full w-full bg-white relative flex flex-col items-center">
              
              {/* Status Bar (Matches Image: 9:41 AM) */}
              <div className="w-full flex justify-between items-center px-8 py-5 text-sm font-medium text-gray-800 bg-white/80 backdrop-blur-sm z-10 sticky top-0">
                <span>9:41 AM</span>
                <div className="flex gap-2 items-center">
                  <Wifi size={16} />
                  <span className="text-xs font-semibold">100%</span>
                  <Battery size={18} />
                </div>
              </div>

              {/* Scrollable Content Area */}
              <div className="flex-1 w-full flex flex-col items-center justify-center p-8 bg-gradient-to-b from-white to-gray-50">
                
                {/* Logo Area - FounderXConnect Style */}
                <div className="flex flex-col items-center mb-10">
                  {/* CSS Logo: Two overlapping diamonds/shapes */}
                  <div className="flex items-center justify-center mb-5 hover:scale-105 transition-transform duration-500 cursor-pointer">
                     <div className="w-10 h-10 bg-cyan-400 rounded-lg transform rotate-45 mix-blend-multiply opacity-90"></div>
                     <div className="w-10 h-10 bg-blue-600 rounded-lg transform rotate-45 -ml-5 mix-blend-multiply opacity-90 shadow-lg"></div>
                  </div>

                  <h3 className="text-2xl font-black text-gray-900 tracking-tight">FounderXConnect</h3>
                  <p className="text-sm text-gray-500 text-center mt-2 font-medium">
                    Find cofounders, investors & build faster.
                  </p>
                </div>

                {/* Live Form Inputs */}
                <div className="space-y-5 w-full max-w-[340px] mx-auto">
                  
                  {/* Email Input */}
                  <div className="group">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="w-full bg-gray-100 border border-gray-300 rounded-xl px-5 py-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all shadow-sm"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  
                  {/* Password Input with Toggle */}
                  <div className="group relative">
                    <input 
                      type={showPassword ? "text" : "password"} 
                      placeholder="Create a password" 
                      className="w-full bg-gray-100 border border-gray-300 rounded-xl px-5 py-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all shadow-sm pr-12"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button 
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600 focus:outline-none"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 mt-4 transition-all shadow-lg hover:shadow-blue-600/25 transform active:scale-[0.98]">
                    <UserPlus size={18} />
                    GET STARTED
                  </button>
                </div>

                {/* Footer / Terms */}
                <p className="text-[11px] text-gray-400 text-center mt-6">
                  By signing up, you agree to our <span className="underline cursor-pointer hover:text-blue-600">Terms of Service</span>.
                </p>

                {/* Social Proof Avatars */}
                <div className="mt-8">
                  <p className="text-center text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">
                    Join these amazing people!
                  </p>
                  <div className="flex justify-center -space-x-3">
                    {[1,2,3,4,5].map((i) => (
                      <div key={i} className={`w-10 h-10 rounded-full border-[3px] border-white flex items-center justify-center text-[10px] font-bold text-white shadow-md transform hover:scale-110 hover:z-10 transition-all cursor-pointer
                        ${i === 1 ? 'bg-orange-500' : ''}
                        ${i === 2 ? 'bg-emerald-500' : ''}
                        ${i === 3 ? 'bg-blue-500' : ''}
                        ${i === 4 ? 'bg-purple-500' : ''}
                        ${i === 5 ? 'bg-pink-500' : ''}
                      `}>
                        U{i}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
              
              {/* Home Bar */}
              <div className="w-full flex justify-center pb-6 bg-white">
                <div className="w-36 h-1.5 bg-gray-300 rounded-full"></div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

// Helper Component for Stats
const StatItem = ({ icon, count, label }) => {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left group cursor-pointer">
      <div className="mb-3 p-3 rounded-xl bg-white border border-gray-100 shadow-sm group-hover:shadow-md group-hover:border-blue-100 transition-all">
        {icon}
      </div>
      <h4 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{count}</h4>
      <p className="text-sm text-gray-500 font-medium">{label}</p>
    </div>
  );
};

export default TrustedSection;