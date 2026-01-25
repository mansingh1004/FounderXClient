import React from 'react';

// --- Assets (Simple Star Icon) ---
const StarIcon = () => (
  <svg className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// --- Data with Indian Names ---
const reviewsRow1 = [
  {
    name: "Pratik",
    role: "CEO, DataFlow",
    avatar: "RK",
    color: "bg-indigo-600",
    text: "Outstanding platform with excellent support. The investor network is truly verified and high-quality."
  },
  {
    name: "Rahul",
    role: "Founder, HealthApp",
    avatar: "PS",
    color: "bg-purple-600",
    text: "Game-changer for our startup journey. The resources and connections provided are invaluable."
  },
  {
    name: "Yash",
    role: "CEO, FinanceAI",
    avatar: "AP",
    color: "bg-blue-600",
    text: "Professional, efficient, and results-driven. Highly recommend to any serious entrepreneur."
  },
  {
    name: "Shreyash",
    role: "Founder, TechStart",
    avatar: "NG",
    color: "bg-indigo-600",
    text: "This platform has been instrumental in connecting us with the right investors. The process was smooth and results exceeded expectations."
  }
];

const reviewsRow2 = [
  {
    name: "Vikram Singh",
    role: "CEO, InnovateLab",
    avatar: "VS",
    color: "bg-emerald-600",
    text: "Amazing experience! Found the perfect investor match within weeks. The AI-powered matching system is incredibly accurate."
  },
  {
    name: "Anjali Desai",
    role: "Founder, GreenTech",
    avatar: "AD",
    color: "bg-emerald-600",
    text: "The one-click pitching feature saved us countless hours. We were able to reach multiple investors simultaneously."
  },
  // Duplicating for loop effect
  {
    name: "Shubham",
    role: "CEO, DataFlow",
    avatar: "RK",
    color: "bg-indigo-600",
    text: "Outstanding platform with excellent support. The investor network is truly verified and high-quality."
  },
  {
    name: "Priya Sharma",
    role: "Founder, HealthApp",
    avatar: "PS",
    color: "bg-purple-600",
    text: "Game-changer for our startup journey. The resources and connections provided are invaluable."
  }
];

// --- Components ---

const TestimonialCard = ({ name, role, avatar, color, text }) => (
  <div className="
    flex flex-col gap-4 p-6 min-w-[350px] max-w-[350px] rounded-2xl
    bg-white border border-gray-200 shadow-sm
    
    /* Animation & Hover */
    transition-all duration-300 ease-out
    hover:shadow-xl hover:-translate-y-1 hover:border-blue-200
  ">
    {/* Header: Avatar + Name */}
    <div className="flex items-center gap-3">
      {/* Avatar */}
      <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center text-white font-bold text-lg shrink-0 shadow-md`}>
        {avatar}
      </div>
      {/* Name & Role */}
      <div className="flex flex-col">
        <h4 className="text-gray-900 font-bold text-base leading-tight">{name}</h4>
        <span className="text-gray-500 text-sm font-medium">{role}</span>
      </div>
    </div>

    {/* Rating */}
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <StarIcon key={i} />
      ))}
      <span className="text-gray-600 text-sm ml-2 font-semibold">5.0</span>
    </div>

    {/* Text */}
    <p className="text-gray-600 text-sm leading-relaxed">
      "{text}"
    </p>
  </div>
);

const MarqueeRow = ({ items, direction = "left", speed = "normal" }) => {
  return (
    <div className="relative flex overflow-hidden w-full select-none group/row">
      {/* Scroll Wrapper */}
      <div 
        className={`flex gap-6 py-4 w-max hover:[animation-play-state:paused] ${
          direction === 'right' ? 'animate-scroll-right' : 'animate-scroll-left'
        }`}
        style={{ animationDuration: speed === 'slow' ? '80s' : '60s' }}
      >
        {/* Render items 3 times for seamless infinite loop */}
        {[...items, ...items, ...items].map((item, idx) => (
          <TestimonialCard key={`${item.name}-${idx}`} {...item} />
        ))}
      </div>

      {/* Gradient Masks (White Fade) */}
      <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10" />
    </div>
  );
};

export default function TestimonialsSection() {
  return (
    <section className="bg-white min-h-screen flex flex-col justify-center py-20 overflow-hidden relative">
      
      {/* CSS for animation */}
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 60s linear infinite;
        }
      `}</style>

      {/* Section Header */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          What Our People Think About Us
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Trusted by thousands of startup founders and investors across India.
        </p>
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-8">
        <MarqueeRow items={reviewsRow1} direction="left" speed="normal" />
        <MarqueeRow items={reviewsRow2} direction="right" speed="slow" />
      </div>

    </section>
  );
}