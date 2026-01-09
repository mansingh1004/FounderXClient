import React from 'react';
import { Target, TrendingUp, Users, MessageSquare, Linkedin, Send, FileText } from 'lucide-react';

const InvestorProfile = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-10 flex justify-center items-center font-sans">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
        
        {/* Header Section */}
        <div className="bg-[#1a3636] p-8 text-white relative">
          <div className="absolute top-4 right-8 w-4 h-4 bg-orange-500 rounded-full opacity-80"></div>
          <h1 className="text-4xl font-extrabold tracking-tight text-[#4ade80]">I AM AN INVESTOR</h1>
          <p className="mt-2 text-xl font-semibold uppercase tracking-wide text-gray-200">
            Fueling the next wave of disruption
          </p>
          <p className="mt-1 text-gray-400">
            Connecting strategic capital with the world's most ambitious founders.
          </p>
        </div>

        <div className="p-8 space-y-10">
          
          {/* 1. Investment Thesis */}
          <section>
            <h2 className="text-2xl font-bold text-[#2d6a4f] flex items-center gap-2">
              1. Investment Thesis & Focus
            </h2>
            <div className="mt-4">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-bold text-[#2d6a4f]">My Objective:</span> "I provide more than just capital. I am looking to partner Seed/Series A/FinTech/AI startups who are ready to scale with high velocity."
              </p>
              <ul className="mt-4 space-y-2">
                {["What I Bring to the Table", "Strategic Guidance", "Operational Support"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-600">
                    <span className="w-2 h-2 bg-[#4ade80] rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <hr className="border-gray-100" />

          {/* 2. Portfolio Table */}
          <section>
            <h2 className="text-2xl font-bold text-[#2d6a4f] mb-6">2. Portfolio & Performance Highlights</h2>
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#4ade80] text-[#1a3636]">
                    <th className="p-4 font-bold border-r border-green-300">Category</th>
                    <th className="p-4 font-bold border-r border-green-300">Metric/Detail</th>
                    <th className="p-4 font-bold border-r border-green-300">Metric</th>
                    <th className="p-4 font-bold">Status</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100 bg-gray-50/50">
                    <td className="p-4 font-semibold border-r border-gray-100">Active Investments</td>
                    <td className="p-4 border-r border-gray-100">[Number] high-growth companies</td>
                    <td className="p-4 border-r border-gray-100 flex items-center gap-2 text-orange-600">
                       <TrendingUp size={18} /> Scaling
                    </td>
                    <td className="p-4 text-green-600 font-medium">✓ Scatur</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold border-r border-gray-100 italic">Preferred Deal Size<br/><span className="font-normal not-italic text-sm">Exit Track Record</span></td>
                    <td className="p-4 border-r border-gray-100">
                      $[Amount] - $[Amount] per round
                    </td>
                    <td className="p-4 border-r border-gray-100 flex items-center gap-2 text-yellow-600">
                       <Target size={18} /> successful acquisitions/IPOs
                    </td>
                    <td className="p-4 text-green-600 font-medium flex items-center gap-2">
                      <span className="bg-green-500 text-white rounded-full p-0.5 text-[10px]">★</span> Active Proven
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <hr className="border-gray-100" />

          {/* 3. Ideal Founder */}
          <section>
            <h2 className="text-2xl font-bold text-[#2d6a4f] mb-4">3. My Ideal Founder Match</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-700">
                <div className="bg-[#4ade80] p-1 rounded text-white"><Users size={16} /></div>
                <span className="font-medium">The Visionary Machine</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="bg-[#4ade80] p-1 rounded text-white"><Target size={16} /></div>
                <span className="font-medium">Resilience</span>
              </div>
            </div>
          </section>

          {/* 4. Action Buttons */}
          <section className="pt-4">
            <h2 className="text-2xl font-bold text-[#2d6a4f] mb-6">4. Start the Conversation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="bg-[#41b38a] hover:bg-[#359673] text-white font-bold py-3 px-6 rounded-md transition-all flex items-center justify-center gap-2">
                SUBMIT PITCH DECK
              </button>
              <button className="bg-[#41b38a] hover:bg-[#359673] text-white font-bold py-3 px-6 rounded-md transition-all flex items-center justify-center gap-2">
                VIEW INVESTMENT THESIS
              </button>
              <button className="bg-[#41b38a] hover:bg-[#359673] text-white font-bold py-3 px-6 rounded-md transition-all flex items-center justify-center gap-2">
                CONNECT ON LINKEDIN
              </button>
            </div>
          </section>

          {/* Footer Notification */}
          <div className="flex items-center gap-2 text-sm text-gray-500 pt-4">
            <div className="bg-blue-100 p-1.5 rounded-full text-blue-600">
              <MessageSquare size={14} />
            </div>
            <p>Mark (Investor) just viewed the pitch deck for TechX 🔧</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorProfile;