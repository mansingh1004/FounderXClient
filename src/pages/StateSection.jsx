import React, { useState, useEffect, useRef } from 'react';

// Helper component for individual counters to keep code clean
const CounterItem = ({ end, duration, prefix = "", suffix = "", icon, label, color }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Calculate current number based on progress
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return (
    <div className="mx-auto flex max-w-xs flex-col gap-y-4 items-center p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gray-50 border border-gray-100">
      <div className={`p-3 rounded-full bg-white shadow-sm ${color} bg-opacity-10`}>
        {icon}
      </div>
      
      <dd className={`order-first text-5xl font-bold tracking-tight ${color}`}>
        {prefix}{count}{suffix}
      </dd>
      
      <dt className="text-base leading-7 text-gray-600 font-medium uppercase tracking-wide">
        {label}
      </dt>
    </div>
  );
};

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Scroll Trigger Logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only trigger if intersecting and not already triggered
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once triggered (runs only once)
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const stats = [
    {
      id: 1,
      label: 'Founders Joined',
      target: 500,    // The number to count to
      prefix: '',
      suffix: '+',
      color: "text-blue-600",
      icon: (
        <svg className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: 2,
      label: 'Active Investors',
      target: 200,
      prefix: '',
      suffix: '+',
      color: "text-emerald-500",
      icon: (
        <svg className="h-8 w-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      id: 3,
      label: 'Funds Raised',
      target: 5,
      prefix: '$',
      suffix: 'M+',
      color: "text-orange-500",
      icon: (
        <svg className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
  ];

  return (
    <div ref={sectionRef} className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mx-auto max-w-2xl lg:max-w-none text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by the Ecosystem
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Connecting visionaries with the resources they need to scale.
          </p>
        </div>

        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            // Only render the counter logic if the section is visible
            isVisible ? (
              <CounterItem 
                key={stat.id}
                end={stat.target}
                duration={2000} // Animation lasts 2 seconds
                prefix={stat.prefix}
                suffix={stat.suffix}
                icon={stat.icon}
                label={stat.label}
                color={stat.color}
              />
            ) : (
              // Static '0' state before scrolling
              <div 
                key={stat.id} 
                className="mx-auto flex max-w-xs flex-col gap-y-4 items-center p-6 rounded-2xl bg-gray-50 border border-gray-100 opacity-50"
              >
                <div className={`p-3 rounded-full bg-white shadow-sm ${stat.color} bg-opacity-10`}>
                  {stat.icon}
                </div>
                <dd className={`order-first text-5xl font-bold tracking-tight ${stat.color}`}>
                  {stat.prefix}0{stat.suffix}
                </dd>
                <dt className="text-base leading-7 text-gray-600 font-medium uppercase tracking-wide">
                  {stat.label}
                </dt>
              </div>
            )
          ))}
        </dl>
      </div>
    </div>
  );
}

export default StatsSection;