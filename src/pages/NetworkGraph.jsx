import React, { useMemo, useState, useEffect } from 'react';
// const isActive = (node.id === activeNode || neighbor.id === activeNode);
const CyberSpaceNetworkRight = () => {
  // --- STATE MANAGEMENT ---
  const [dimensions, setDimensions] = useState({ w: 1200, h: 800 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeNode, setActiveNode] = useState(null); // TRACK CLICKED NODE

  // Configuration
  const CONFIG = {
    nodeCount: 70,
    particleCount: 80,
    connectionDistance: 160,
    colors: ['#4A90E2', '#F5A623', '#50E3C2', '#9013FE', '#FF4081'],
  };

  // --- 1. HANDLE FULL SCREEN RESIZE ---
  useEffect(() => {
    const handleResize = () => {
      setDimensions({ w: window.innerWidth, h: window.innerHeight });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // --- HELPER: CALCULATE CENTER POINT ---
  const getNetworkCenter = () => {
    const isMobile = dimensions.w < 768;
    return {
      x: isMobile ? dimensions.w * 0.5 : dimensions.w * 0.75,
      y: dimensions.h * 0.5
    };
  };

  // --- 2. GENERATE RANDOM NETWORK ---
  const initialNodes = useMemo(() => {
    const nodes = [];
    if (dimensions.w === 0) return [];
    const center = getNetworkCenter();

    for (let i = 0; i < CONFIG.nodeCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const maxSpread = Math.min(dimensions.w, dimensions.h) * 0.50; 
      const radius = Math.random() * maxSpread; 
      
      nodes.push({
        id: i,
        x: center.x + Math.cos(angle) * radius,
        y: center.y + Math.sin(angle) * radius,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        originalX: center.x + Math.cos(angle) * radius,
        originalY: center.y + Math.sin(angle) * radius,
        color: CONFIG.colors[Math.floor(Math.random() * CONFIG.colors.length)],
        size: Math.random() * 6 + 4, 
        type: i < 5 ? 'core' : 'satellite'
      });
    }
    return nodes;
  }, [dimensions.w, dimensions.h]); 

  // --- 3. BACKGROUND PARTICLES ---
  const particles = useMemo(() => {
    return Array.from({ length: CONFIG.particleCount }).map((_, i) => ({
      id: i,
      x: Math.random() * dimensions.w,
      y: Math.random() * dimensions.h,
      size: Math.random() * 2,
      opacity: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.2 + 0.05
    }));
  }, [dimensions]);

  const [simNodes, setSimNodes] = useState([]);
  const [simParticles, setSimParticles] = useState([]);

  useEffect(() => {
    if (initialNodes.length > 0) {
      setSimNodes(initialNodes);
      setSimParticles(particles);
    }
  }, [initialNodes, particles]);

  // --- 4. PHYSICS LOOP ---
  useEffect(() => {
    let frameId;
    const animate = () => {
      setSimNodes(prev => prev.map(node => {
        let { x, y, vx, vy, originalX, originalY } = node;
        x += vx; y += vy;
        const dx = x - originalX;
        const dy = y - originalY;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist > 50) { vx -= dx * 0.0005; vy -= dy * 0.0005; }
        return { ...node, x, y, vx, vy };
      }));

      setSimParticles(prev => prev.map(p => ({
        ...p,
        y: p.y - p.speed < 0 ? dimensions.h : p.y - p.speed
      })));
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [dimensions.h]);

  const handleMouseMove = (e) => {
    const x = (e.clientX - dimensions.w / 2) / (dimensions.w / 2);
    const y = (e.clientY - dimensions.h / 2) / (dimensions.h / 2);
    setMousePos({ x, y });
  };

  const handleNodeClick = (id) => {
    // Toggle: if clicking the same node, deselect it, otherwise select new one
    setActiveNode(prev => prev === id ? null : id);
  };

  const getZigZagPath = (start, end, jitter = 10) => {
    const dist = Math.hypot(end.x - start.x, end.y - start.y);
    const segments = Math.max(2, Math.floor(dist / 40));
    let path = `M ${start.x} ${start.y}`;
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    for (let i = 1; i < segments; i++) {
        const t = i / segments;
        const cx = start.x + dx * t;
        const cy = start.y + dy * t;
        const offset = Math.sin((cx + cy) * 0.05 + Date.now() * 0.002) * jitter;
        const px = (-dy / dist) * offset;
        const py = (dx / dist) * offset;
        path += ` L ${cx + px} ${cy + py}`;
    }
    path += ` L ${end.x} ${end.y}`;
    return path;
  };

  return (
    <>
    {/* INJECT ANIMATION STYLES */}
    <style>{`
      @keyframes dashFlow {
        to {
          stroke-dashoffset: -200; /* Moves the dash pattern */
        }
      }
      .line-active {
        animation: dashFlow 1s linear infinite;
        stroke: #ffffff; /* Bright white when active */
        stroke-width: 2.5px;
        filter: drop-shadow(0 0 5px #00f0ff); /* Neon glow */
      }
    `}</style>

    <div 
      className="w-full h-screen bg-slate-950 overflow-hidden relative flex items-center"
      onMouseMove={handleMouseMove}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,_rgba(20,30,50,1)_0%,_rgba(2,6,23,1)_100%)] pointer-events-none" />

      {/* TEXT CONTENT LAYER (Left Side) - Keeping original content */}
      <div className="relative z-10 w-full md:w-1/2 px-8 md:px-20 pointer-events-auto overflow-y-auto h-full flex flex-col justify-center">
         <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Where Vision <br />
                Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Velocity
                </span>
            </h1>
            <p className="text-white text-lg md:text-xl max-w-md mb-8 leading-relaxed opacity-90">
                The bridge between world-changing ideas and people who make them happen.
            </p>
            <button className="bg-gradient-to-r from-[#1e40af] to-[#2dd4bf] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
                Join the Ecosystem
            </button>
         </div>
         {/* ... (Cards hidden for brevity, but they would go here as in your code) ... */}
      </div>

      {/* SVG VISUALIZATION LAYER (Right Side) */}
      <svg 
        width={dimensions.w} 
        height={dimensions.h} 
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="300%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Background Particles */}
        {simParticles.map((p, i) => (
          <circle key={`part-${i}`} cx={p.x} cy={p.y} r={p.size} fill="white" opacity={p.opacity} />
        ))}

        <g style={{ transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)`, transition: 'transform 0.1s ease-out' }}>
          
          {/* 1. RENDER LINES */}
          {simNodes.map((node, i) => {
            const lines = [];
            for (let j = i + 1; j < simNodes.length; j++) {
              const neighbor = simNodes[j];
              const dist = Math.hypot(node.x - neighbor.x, node.y - neighbor.y);
              
              if (dist < CONFIG.connectionDistance) {
                // LOGIC: Check if this line is connected to the clicked node
                const isActive = (node.id === activeNode || neighbor.id === activeNode);
                
                const opacity = 1 - (dist / CONFIG.connectionDistance);
                
                lines.push(
                  <path 
                    key={`link-${i}-${j}`} 
                    d={getZigZagPath(node, neighbor, isActive ? 2 : 5)} // Less jitter if active for smoother flow
                    // If active, use white, else use node color
                    stroke={isActive ? '#ffffff' : node.color} 
                    strokeWidth={isActive ? 2.5 : opacity * 1.5} 
                    strokeOpacity={isActive ? 1 : opacity * 0.6} 
                    fill="none"
                    // KEY CHANGE: Add dash array and class for animation
                    strokeDasharray={isActive ? "10, 10" : "0"} 
                    className={isActive ? "line-active" : ""} 
                  />
                );
              }
            }
            
            // Core lines (dotted lines to center)
            if (node.type === 'core') {
               const center = getNetworkCenter();
               lines.push(<path key={`core-${i}`} d={getZigZagPath(center, node, 8)} stroke={node.color} strokeWidth="2" strokeDasharray="5,5" strokeOpacity="0.4" fill="none" />);
            }
            return lines;
          })}

          {/* 2. RENDER NODES */}
          {simNodes.map((node) => {
             const isSelected = node.id === activeNode;
             return (
                <g 
                    key={`node-${node.id}`} 
                    transform={`translate(${node.x}, ${node.y})`}
                    onClick={() => handleNodeClick(node.id)} // CLICK EVENT
                    className="cursor-pointer pointer-events-auto transition-transform duration-300 hover:scale-125"
                >
                  {/* Outer Glow */}
                  <circle 
                    r={isSelected ? node.size * 3 : node.size * 2} 
                    fill={isSelected ? '#ffffff' : node.color} 
                    fillOpacity="0.2" 
                    filter="url(#glow)" 
                  />
                  
                  {/* Main Node Body */}
                  <circle 
                    r={node.size} 
                    stroke={isSelected ? '#ffffff' : node.color} 
                    strokeWidth={isSelected ? 3 : 2} 
                    fill="#0f172a" 
                  />
                  
                  {/* Inner Core */}
                  <circle 
                    r={isSelected ? node.size * 0.6 : node.size * 0.4} 
                    fill="white" 
                  />
                </g>
             );
          })}
        </g>
      </svg>
    </div>
    </>
  );
};

export default CyberSpaceNetworkRight;