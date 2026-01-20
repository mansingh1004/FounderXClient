import React, { useEffect, useState } from 'react';
import { Rocket, Leaf, Settings } from 'lucide-react';

// --- Components ---

const FloatingParticles = () => {
  const particles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute bg-white rounded-full opacity-10 animate-float"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

const NetworkGraph = () => {
  // Static Nodes
  const nodes = [
    { id: 0, x: 50, y: 50, size: 24, color: "cyan", label: "Core", pulse: true },
    { id: 1, x: 35, y: 35, size: 8, color: "cyan" },
    { id: 2, x: 65, y: 35, size: 8, color: "orange" },
    { id: 3, x: 65, y: 65, size: 8, color: "cyan" },
    { id: 4, x: 35, y: 65, size: 8, color: "orange" },
    { id: 5, x: 20, y: 20, size: 6, color: "cyan" },
    { id: 6, x: 80, y: 20, size: 6, color: "orange" },
    { id: 7, x: 80, y: 80, size: 6, color: "cyan" },
    { id: 8, x: 20, y: 80, size: 6, color: "orange" },
    { id: 9, x: 50, y: 15, size: 5, color: "cyan" },
    { id: 10, x: 85, y: 50, size: 5, color: "orange" },
    { id: 11, x: 50, y: 85, size: 5, color: "cyan" },
    { id: 12, x: 15, y: 50, size: 5, color: "cyan" },
    { id: 13, x: 10, y: 10, size: 4, color: "cyan" },
    { id: 14, x: 90, y: 10, size: 4, color: "cyan" },
    { id: 15, x: 90, y: 90, size: 4, color: "orange" },
    { id: 16, x: 10, y: 90, size: 4, color: "cyan" },
  ];

  const links = [
    [0, 1], [0, 2], [0, 3], [0, 4], 
    [0, 9], [0, 10], [0, 11], [0, 12],
    [1, 5], [1, 12], [1, 9],
    [2, 6], [2, 9], [2, 10],
    [3, 7], [3, 10], [3, 11],
    [4, 8], [4, 11], [4, 12],
    [5, 13], [6, 14], [7, 15], [8, 16],
    [5, 9], [6, 9], [7, 11], [8, 12]
  ];

  // --- COLOR PALETTE ---
  const lightColors = [
    "#ef4444", // Red
    "#3b82f6", // Blue
    "#f97316", // Orange
    "#eab308", // Yellow
    "#22c55e", // Green
    "#a855f7", // Purple
    "#ec4899", // Pink
    "#06b6d4", // Cyan
  ];

  // Helper to generate Zig-Zag "Lightning" path
  const getZigZagPath = (start, end, index) => {
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    
    const p1x = start.x + dx * 0.33;
    const p1y = start.y + dy * 0.33;
    const p2x = start.x + dx * 0.66;
    const p2y = start.y + dy * 0.66;

    const offsetAmount = 3; 
    const offsetX = -dy * 0.1 * (index % 2 === 0 ? 1 : -1); 
    const offsetY = dx * 0.1 * (index % 2 === 0 ? 1 : -1);

    const zig1x = p1x + offsetX;
    const zig1y = p1y + offsetY;
    const zig2x = p2x - offsetX;
    const zig2y = p2y - offsetY;

    return `M ${start.x} ${start.y} L ${zig1x} ${zig1y} L ${zig2x} ${zig2y} L ${end.x} ${end.y}`;
  };

  return (
    <div className="relative w-full max-w-lg aspect-square mx-auto perspective-1000">
      <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow-cyan-strong" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-orange-strong" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* --- ZIG ZAG LINES --- */}
        <g>
            {links.map(([start, end], i) => {
                const startNode = nodes[start];
                const endNode = nodes[end];
                const pathData = getZigZagPath(startNode, endNode, i);
                
                // Select a color from the palette based on index
                const lightColor = lightColors[i % lightColors.length];
                
                const duration = 2 + (i % 3); 
                const delay = i * 0.15;

                return (
                    <g key={`link-group-${i}`}>
                        {/* Base Structure Line (Dark/Subtle) */}
                        <path
                            d={pathData}
                            stroke="#334155" 
                            strokeOpacity="0.4"
                            strokeWidth="0.5"
                            fill="none"
                        />

                        {/* The MULTI-COLOR Moving Light */}
                        <path
                            d={pathData}
                            stroke={lightColor} 
                            strokeWidth="1"
                            fill="none"
                            strokeLinecap="round"
                            strokeDasharray="5, 45" // Light packet length 5, gap 45
                            className="animate-flow"
                            style={{
                                animationDuration: `${duration}s`,
                                animationDelay: `-${delay}s`,
                                // CSS Drop Shadow for Neon Effect (Clean way to glow any color)
                                filter: `drop-shadow(0 0 3px ${lightColor})`, 
                                opacity: 1
                            }}
                        />
                    </g>
                );
            })}
        </g>

        {/* --- NODES (STATIC) --- */}
        {nodes.map((node) => (
          <g key={`node-${node.id}`} className="transition-transform duration-500"> 
            
            {/* Core Pulse */}
            {node.pulse && (
               <circle cx={node.x} cy={node.y} r={node.size} fill="transparent" stroke="#06b6d4" strokeWidth="0.5" className="animate-ping opacity-20" />
            )}

            {/* Glow Halo */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.size / 2}
              fill={node.label ? "rgba(6, 182, 212, 0.1)" : "transparent"}
              stroke={node.color === "orange" ? "#f97316" : "#06b6d4"}
              strokeWidth={node.label ? 1.5 : 0.8}
              filter={`url(#glow-${node.color}-strong)`}
              className="opacity-90"
            />
            
            {/* Solid Center */}
            <circle 
                cx={node.x} 
                cy={node.y} 
                r={node.label ? node.size / 2 - 3 : node.size / 4} 
                fill={node.label ? "rgba(0,0,0,0.6)" : "white"} 
                className={!node.label ? "drop-shadow-[0_0_2px_rgba(255,255,255,0.8)]" : ""}
            />

            {/* Label */}
            {node.label && (
              <text x={node.x} y={node.y} dy=".3em" textAnchor="middle" fill="white" fontSize="5" fontWeight="800" className="select-none tracking-widest uppercase drop-shadow-md">
                {node.label}
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
};

const ProgressRing = ({ percentage, colorClass }) => {
  const radius = 18;
  const stroke = 3;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center group">
      <div className={`absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500 ${colorClass.replace('text-', 'bg-')}`}></div>
      <svg height={radius * 2} width={radius * 2} className="rotate-[-90deg] relative z-10">
        <circle stroke="rgba(255,255,255,0.1)" strokeWidth={stroke} fill="transparent" r={normalizedRadius} cx={radius} cy={radius} />
        <circle stroke="currentColor" className={`${colorClass} transition-all duration-1000 ease-out`} strokeWidth={stroke} strokeDasharray={circumference + ' ' + circumference} style={{ strokeDashoffset }} strokeLinecap="round" fill="transparent" r={normalizedRadius} cx={radius} cy={radius} />
      </svg>
      <span className="absolute text-[10px] font-bold text-white ml-8 drop-shadow-md">{percentage}%</span>
    </div>
  );
};

const MatchmakerCard = ({ icon: Icon, title, percentage, theme, delay }) => {
  const themes = {
    blue: "bg-blue-600/10 border-blue-500/20 text-blue-400 hover:border-blue-400/50 hover:bg-blue-600/20",
    green: "bg-emerald-600/10 border-emerald-500/20 text-emerald-400 hover:border-emerald-400/50 hover:bg-emerald-600/20",
    orange: "bg-orange-600/10 border-orange-500/20 text-orange-400 hover:border-orange-400/50 hover:bg-orange-600/20",
  };
  const iconBg = {
    blue: "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]",
    green: "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]",
    orange: "bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]",
  }
  return (
    <div className={`flex items-center justify-between p-2 pr-4 rounded-full border backdrop-blur-md ${themes[theme]} min-w-[200px] transition-all duration-300 hover:scale-105 cursor-pointer hover:shadow-lg animate-slideUp opacity-0`} style={{ animationFillMode: 'forwards', animationDelay: `${delay}ms` }}>
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-full text-white transition-transform group-hover:rotate-12 ${iconBg[theme]}`}>
          <Icon size={16} fill="white" className="drop-shadow-sm" />
        </div>
        <span className="text-sm font-semibold text-gray-100 whitespace-nowrap tracking-wide">{title}</span>
      </div>
      <ProgressRing percentage={percentage} colorClass={themes[theme].split(' ').find(c => c.startsWith('text-'))} />
    </div>
  );
};

export default function HeroSection() {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => { setLoaded(true); }, []);

  return (
    <div className="min-h-screen bg-[#080c14] text-white overflow-hidden relative font-sans selection:bg-cyan-500/30">
      <FloatingParticles />
      {/* Colorful background glow blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 py-12 lg:py-20 relative z-10 flex flex-col lg:flex-row items-center justify-between h-full">
        <div className={`flex-1 max-w-2xl mb-16 lg:mb-0 pt-10 transition-all duration-1000 transform ${loaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
            Where Vision <br />
            Meets <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-yellow-500 animate-gradient-x bg-[length:200%_200%]">Velocity</span>
          </h1>
          <p className="mt-6 text-gray-400 text-lg max-w-md leading-relaxed animate-fadeIn" style={{ animationDelay: '0.5s' }}>
            The bridge between world-changing ideas and people who make them happen.
          </p>
          <button className="relative group mt-10 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-bold text-white shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:scale-105 transition-all duration-300 overflow-hidden">
             <span className="relative z-10">Join the Ecosystem</span>
             <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <div className="mt-20">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4 animate-fadeIn" style={{ animationDelay: '0.8s' }}>Matchmaker</h3>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <MatchmakerCard icon={Rocket} title="I am a Founder" percentage={50} theme="blue" delay={900} />
              <MatchmakerCard icon={Leaf} title="I am an Investor" percentage={85} theme="green" delay={1100} />
              <MatchmakerCard icon={Settings} title="Specialist" percentage={20} theme="orange" delay={1300} />
            </div>
          </div>
        </div>
        <div className={`flex-1 w-full flex justify-center lg:justify-end relative transition-all duration-1000 delay-500 transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
           <NetworkGraph />
        </div>
      </div>

        <style>{`
            @keyframes float {
                0%, 100% { transform: translate(0, 0); }
                50% { transform: translate(0, -10px); }
            }
            @keyframes pulse-slow {
                0%, 100% { opacity: 0.3; }
                50% { opacity: 0.6; }
            }
            @keyframes slideUp {
                from { transform: translateY(20px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes gradient-x {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            @keyframes flow {
                from { stroke-dashoffset: 50; } /* 5 (dash) + 45 (gap) = 50 */
                to { stroke-dashoffset: 0; }
            }
            .animate-float { animation: float 6s ease-in-out infinite; }
            .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
            .animate-slideUp { animation: slideUp 0.8s ease-out forwards; }
            .animate-fadeIn { animation: fadeIn 1s ease-out forwards; opacity: 0; }
            .animate-gradient-x { animation: gradient-x 3s ease infinite; }
            .animate-flow { animation: flow linear infinite; }
        `}</style>
    </div>
  );
}