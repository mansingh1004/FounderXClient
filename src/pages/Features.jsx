import React from 'react';
// Import icons from lucide-react (npm install lucide-react)
import { Search, MessageSquare, Calendar, ShieldCheck } from 'lucide-react';

const FeatureCard = ({ Icon, title, description, iconColor }) => (
  <div className="flex flex-col items-center text-center p-6 group transition-all duration-300 hover:-translate-y-2">
    {/* High-End Icon Container */}
    <div className={`relative w-24 h-24 mb-8 flex items-center justify-center`}>
      {/* Decorative Background Circles */}
      <div className={`absolute inset-0 bg-${iconColor}-50 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-300 opacity-70`}></div>
      <div className={`absolute inset-0 bg-white border border-${iconColor}-100 rounded-3xl shadow-sm`}></div>
      
      {/* The Actual Icon */}
      <div className={`relative z-10 text-${iconColor}-600`}>
        <Icon size={38} strokeWidth={1.5} />
      </div>
    </div>

    <h3 className="font-bold text-xl text-slate-800 mb-3 tracking-tight">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed max-w-[260px]">
      {description}
    </p>
  </div>
);

const CommunityPage = () => {
  return (
    <div className="min-h-screen bg-slate-50/50 font-sans antialiased">
      <section className="py-24 px-4">
        <div className="text-center mb-20">
            {/* <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Network Smarter</h2> */}
            <h1 className="text-4xl md:text-5xl font-black text-slate-900">
            Discover Your Community
            </h1>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <FeatureCard 
            title="Browse & Connect"
            description="Easily explore professionals, groups, and opportunities tailored to your passions."
            Icon={Search} 
            iconColor="blue"
          />
          <FeatureCard 
            title="Engage & Chat"
            description="Instantly message find like-minded members and join vibrant discussions."
            Icon={MessageSquare}
            iconColor="rose"
          />
          <FeatureCard 
            title="Events & Meetups"
            description="Discover and attend local member gatherings and networking sessions."
            Icon={Calendar}
            iconColor="amber"
          />
          <FeatureCard 
            title="Safe & Secure"
            description="Connect confidently with verified profiles and industry-leading privacy controls."
            Icon={ShieldCheck}
            iconColor="emerald"
          />
        </div>
      </section>

      {/* --- Footer Section --- */}
      <section className="bg-[#132c2c] text-white py-24 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Join Thousands of Others!</h2>
          <p className="text-teal-100/60 text-lg max-w-2xl mx-auto mb-10">
              Start your journey today and connect with the next generation of founders.
          </p>
          <button className="bg-white text-[#132c2c] px-8 py-3 rounded-full font-bold hover:bg-teal-50 transition-colors">
              Get Started for Free
          </button>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;