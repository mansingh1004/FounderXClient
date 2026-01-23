import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  // State to track which FAQ is currently open (null means all closed)
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is FounderXConnect and how does it work?",
      answer: "FounderXConnect is a premier platform designed to connect startup founders with co-founders, investors, and ecosystem enablers. It works by using an intelligent matching algorithm to pair users based on skills, industry interests, and startup goals."
    },
    {
      question: "Is FounderXConnect free to use?",
      answer: "Yes, FounderXConnect offers a free tier for founders to create profiles and browse potential matches. Premium features are available for advanced filtering, priority matching, and direct messaging capabilities."
    },
    {
      question: "Can I find investors or incubators on FounderXConnect?",
      answer: "Absolutely. FounderXConnect hosts a network of verified angel investors, VCs, and incubators looking for promising early-stage startups to support and fund."
    },
    {
      question: "Do I need a startup idea to join FounderXConnect?",
      answer: "No, you don't need a fully formed idea. You can join as a co-founder looking to contribute your skills (technical, marketing, operations) to an existing project or join an early-stage team."
    },
    {
      question: "How does FounderXConnect ensure safe and genuine connections?",
      answer: "We use a rigorous verification process for all profiles, including LinkedIn integration and manual vetting for investors, to ensure a high-quality, spam-free, and safe community."
    },
    {
      question: "Can I use FounderXConnect if I'm not based in India?",
      answer: "While our primary focus is the Indian startup ecosystem, we are open to international founders and investors who are interested in the Indian market or building cross-border startups."
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-3xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about building your startup journey with <span className="text-blue-600 font-bold">FounderXConnect</span>.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={`group bg-white rounded-xl overflow-hidden transition-all duration-300 border 
                ${openIndex === index 
                  ? 'border-blue-200 shadow-lg ring-1 ring-blue-100' 
                  : 'border-gray-200 shadow-sm hover:shadow-md hover:border-blue-100'
                }`}
            >
              
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left cursor-pointer focus:outline-none"
              >
                <span 
                  className={`font-bold text-lg transition-colors duration-200 
                    ${openIndex === index ? 'text-blue-700' : 'text-gray-800 group-hover:text-blue-600'}
                  `}
                >
                  {faq.question}
                </span>
                
                {/* Rotating Icon */}
                <span className={`ml-4 flex-shrink-0 p-1 rounded-full transition-all duration-300 
                  ${openIndex === index ? 'bg-blue-100 rotate-180' : 'bg-gray-100 group-hover:bg-blue-50'}
                `}>
                  <ChevronDown 
                    className={`w-5 h-5 transition-colors duration-200 
                      ${openIndex === index ? 'text-blue-600' : 'text-gray-500 group-hover:text-blue-600'}
                    `} 
                  />
                </span>
              </button>

              {/* Answer Dropdown with Smooth Animation */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden
                  ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                `}
              >
                <div className="px-6 pb-6 pt-0">
                  <p className="text-gray-600 leading-relaxed text-base border-t border-gray-100 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA (Optional Polish) */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions?{' '}
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Contact our support team
            </a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default FAQSection;