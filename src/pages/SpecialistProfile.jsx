import React from 'react';
import { Settings, Rocket, ExternalLink, Mail, Code, Layers, Cpu } from 'lucide-react';

const SpecialistProfile = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 flex justify-center items-center font-sans">
      {/* Main Container */}
      <div className="max-w-5xl w-full bg-[#f4f1ea] rounded-2xl shadow-xl overflow-hidden border border-gray-200">
        
        {/* Header Title */}
        <div className="bg-white px-8 py-4 border-b border-gray-200">
          <h1 className="text-3xl font-serif font-bold text-[#e67e22]">I am a Specialist</h1>
        </div>

        <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left & Middle Column (Main Content) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Top Profile Intro */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex flex-col items-center gap-3">
                <div className="w-40 h-40 rounded-full border-4 border-white shadow-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="bg-[#e67e22] text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide">
                  MATCHMAKER ECOSYSTEM
                </span>
              </div>

              <div className="flex-1">
                <h2 className="text-3xl font-bold text-[#1a365d]">Turning Expertise into Impact</h2>
                <p className="text-gray-600 mt-2 text-lg italic">
                  Your skills are the engine of innovation. Find the mission that needs your unique velocity.
                </p>
                
                <div className="mt-6">
                  <h3 className="font-bold text-[#e67e22] uppercase text-sm tracking-wider">1. Professional Profile</h3>
                  <p className="mt-2 text-gray-700 leading-relaxed">
                    I am a Senior Full-Stack Developer dedicated to helping startups scale through scalable architecture and cloud-native solutions. I thrive in fast-paced environments where vision meets execution.
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-[#1a365d] flex items-center gap-2">
                      <Code size={16} /> Key Technical Strengths
                    </h4>
                    <ul className="mt-2 space-y-1 text-sm text-gray-600">
                      <li>• <span className="font-semibold">Primary Focus:</span> Scalable Architecture</li>
                      <li>• <span className="font-semibold">Supporting Skills:</span> Microservices & APIs</li>
                      <li>• <span className="font-semibold">Toolbox:</span> React, Node.js, AWS, Docker</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Roadmap (Table/Timeline) */}
            <div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-4">2. My Impact Roadmap</h3>
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="grid grid-cols-4 bg-gray-50 border-b p-3 text-xs font-bold text-gray-500 uppercase tracking-widest">
                  <div className="col-span-1">Phase</div>
                  <div className="col-span-2">Experience</div>
                  <div className="col-span-1 text-right">Action & Impact</div>
                </div>
                
                {/* Row 1 */}
                <div className="grid grid-cols-4 p-4 border-b items-center gap-4">
                  <div className="col-span-1 flex items-center gap-2 text-[#e67e22]">
                    <Settings size={20} /> <span className="font-bold">The Build</span>
                  </div>
                  <div className="col-span-2 text-sm text-gray-600">
                    Inventory focus and landing architecture for global scaling.
                  </div>
                  <div className="col-span-1 text-right">
                    <span className="bg-green-100 text-green-700 text-[10px] px-2 py-1 rounded-full font-bold italic uppercase">Completed</span>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-4 p-4 items-center gap-4">
                  <div className="col-span-1 flex items-center gap-2 text-[#e67e22]">
                    <Rocket size={20} /> <span className="font-bold text-sm">Next Mission</span>
                  </div>
                  <div className="col-span-2 text-sm text-gray-600">
                    Applying technical insights to lead the AI transformation.
                  </div>
                  <div className="col-span-1 text-right">
                    <span className="bg-cyan-400 text-white text-[10px] px-2 py-1 rounded-full font-bold italic uppercase animate-pulse">In Progress</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-[#1a365d] mb-4">Why Founders Choose Me</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2 text-gray-600"><span className="text-[#e67e22] font-bold">•</span> Rapid prototyping and MVP delivery</li>
                <li className="flex gap-2 text-gray-600"><span className="text-[#e67e22] font-bold">•</span> Clean, maintainable codebases</li>
                <li className="flex gap-2 text-gray-600"><span className="text-[#e67e22] font-bold">•</span> Mentorship and team leadership</li>
              </ul>
            </div>

            {/* Progress Circles (Simplified with CSS) */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
              <div className="flex justify-around">
                <div>
                   <div className="w-20 h-20 rounded-full border-8 border-cyan-400 border-t-gray-100 flex items-center justify-center font-bold text-lg">95%</div>
                   <p className="text-[10px] mt-2 font-bold text-gray-500">INDUSTRY FIT</p>
                </div>
                <div>
                   <div className="w-20 h-20 rounded-full border-8 border-[#e67e22] border-l-gray-100 flex items-center justify-center font-bold text-lg">80%</div>
                   <p className="text-[10px] mt-2 font-bold text-gray-500">TECH STACK</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4">
              <h3 className="font-bold text-[#1a365d] text-center">Connect with My Expertise</h3>
              <button className="w-full bg-[#e67e22] hover:bg-[#d35400] text-white font-bold py-3 rounded-xl transition shadow-md flex items-center justify-center gap-2">
                <ExternalLink size={18} /> VIEW PORTFOLIO
              </button>
              <button className="w-full bg-[#e67e22] hover:bg-[#d35400] text-white font-bold py-3 rounded-xl transition shadow-md flex items-center justify-center gap-2">
                <Mail size={18} /> MESSAGE VIA RESUME
              </button>
            </div>
          </div>
        </div>

        {/* Footer Feed */}
        <div className="bg-[#e67e22] p-2 px-6 flex items-center gap-3 text-white text-xs">
          <span className="bg-white text-[#e67e22] px-2 py-0.5 rounded font-bold uppercase tracking-tighter">Live Feed</span>
          <p className="italic opacity-90">Alex (Specialist) just matched with TechX for a Lead Developer role ⚙️</p>
        </div>
      </div>
    </div>
  );
};

export default SpecialistProfile;