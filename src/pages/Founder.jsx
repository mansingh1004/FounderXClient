import React from 'react';
import { Rocket, Eye, Shield, Globe, Linkedin, Twitter, Mail, CheckCircle2 } from 'lucide-react';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
const FounderPage = () => {


   const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/founder") {
      const section = document.getElementById("founder");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location.pathname]);


  return (
    <div className="min-h-screen bg-gray-50 p-8 md:p-12 font-sans text-slate-800">
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="bg-white border-2 border-emerald-100 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center shadow-sm relative overflow-hidden">
          <div className="z-10 text-center md:text-left">
            <h1 className="text-5xl font-bold text-slate-900 mb-4">I am a Founder</h1>
            <p className="text-emerald-500 text-xl font-medium">Turning Bold Ideas into Scalable Reality</p>
          </div>
          <div className="mt-6 md:mt-0 relative">
            <div className="w-40 h-40 rounded-full border-4 border-emerald-400 overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" 
                alt="Founder Portrait" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* 1. Executive Summary */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col h-full">
            <h2 className="text-xl font-bold mb-4">1. Executive Summary</h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Empowering innovation through strategic leadership and technical excellence. 
              We bridge the gap between complex problems and elegant, scalable solutions.
            </p>
            
            <h3 className="font-bold text-slate-900 mb-4">Founder's Core Value</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-emerald-600 font-medium">
                <Rocket className="w-5 h-5 mr-3" /> Velocity
              </li>
              <li className="flex items-center text-emerald-600 font-medium">
                <Globe className="w-5 h-5 mr-3" /> Vision
              </li>
              <li className="flex items-center text-emerald-600 font-medium">
                <Shield className="w-5 h-5 mr-3" /> Integrity
              </li>
            </ul>
          </div>

          {/* Right Column Stack */}
          <div className="md:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* 2. My Founder Journey */}
              <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                <h2 className="text-xl font-bold mb-4">2. My Founder Journey</h2>
                <p className="text-slate-500 text-xs mb-6">Tracing the path from ideation to market disruption.</p>
                
                <div className="space-y-3">
                  <div className="bg-slate-900 text-white p-3 rounded-lg text-sm font-semibold">Status</div>
                  {[
                    { label: "The Problem", icon: <CheckCircle2 className="text-emerald-500 w-5 h-5" /> },
                    { label: "The Solution", icon: <CheckCircle2 className="text-emerald-500 w-5 h-5" /> },
                    { label: "The Future", icon: <Rocket className="text-emerald-500 w-5 h-5" /> }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
                      <span className="text-sm font-medium text-slate-700">{item.label}</span>
                      {item.icon}
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Strategic Roadmap */}
              <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">3. Strategic Roadmap</h2>
                </div>
                
                <div className="space-y-6">
                  {[
                    { q: "Q1 - Foundation", progress: "w-3/4", color: "bg-slate-900" },
                    { q: "Q2 - Launch", progress: "w-1/2", color: "bg-emerald-400" },
                    { q: "Q3 - Expansion", progress: "w-1/4", color: "bg-slate-800" }
                  ].map((step, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs font-bold mb-2">
                        <span>{step.q}</span>
                        {i === 0 && <Rocket className="w-4 h-4 text-emerald-500" />}
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div className={`h-full ${step.progress} ${step.color} rounded-full`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 4. Founder Connectivity */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
              <h2 className="text-xl font-bold mb-2">4. Founder Connectivity</h2>
              <p className="text-slate-500 text-xs mb-6">Connect with our ecosystem and explore opportunities.</p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <button className="bg-orange-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-orange-700 transition-colors">
                  Access Data Room
                </button>
                <button className="bg-orange-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-orange-700 transition-colors">
                  View Open Roles
                </button>
                <button className="bg-orange-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-orange-700 transition-colors">
                  Book a 15-Min Intro
                </button>
              </div>

              <div className="flex justify-between items-center border-t pt-6">
                <div className="flex gap-4">
                  <Linkedin className="w-5 h-5 text-slate-800 cursor-pointer" />
                  <Twitter className="w-5 h-5 text-slate-800 cursor-pointer" />
                  <Mail className="w-5 h-5 text-slate-800 cursor-pointer" />
                </div>
                <div className="flex gap-4">
                  <Globe className="w-5 h-5 text-slate-400" />
                  <Mail className="w-5 h-5 text-slate-400" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderPage;