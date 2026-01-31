import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Rocket } from "lucide-react";

export default function FounderXConnectChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Welcome to FounderXConnect! 🚀 Ready to scale your startup or find your next co-founder?" }
  ]);
  
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    const lowerInput = input.toLowerCase();

    let botReply = "That sounds interesting! Let me connect you with a relevant expert from our community. 🤝";

    if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
      botReply = "Hi Founder! 😊 Are you looking for networking, funding, or mentorship today?";
    } 
    else if (lowerInput.includes("founder") || lowerInput.includes("cofounder") || lowerInput.includes("partner")) {
      botReply = "Our 'Matchmaker' algorithm helps you find co-founders based on skill gaps. Check the 'Find Partners' tab!";
    } 
    else if (lowerInput.includes("fund") || lowerInput.includes("pitch") || lowerInput.includes("invest")) {
      botReply = "We have over 500+ VCs and Angel Investors. Would you like to join our next 'Pitch Friday' session? 📈";
    } 
    else if (lowerInput.includes("mentor") || lowerInput.includes("advice")) {
      botReply = "Expert mentors from YC, Google, and Meta are available. Want to see the list? 💡";
    }

    setMessages([...messages, userMsg, { sender: "bot", text: botReply }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      
      {/* --- CIRCULAR FLOATING BUTTON --- */}
      <div className="flex items-center gap-3 justify-end">
        {/* Tooltip Label (Visible on Hover) */}
        {!open && (
          <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-indigo-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium shadow-lg mr-2 mb-1">
            Ask FounderX
          </span>
        )}
        
        <button
          onClick={() => setOpen(!open)}
          className="group relative bg-indigo-600 hover:bg-indigo-700 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
        >
          {open ? <X size={28} /> : (
            <>
              <MessageSquare size={28} />
              {/* Tooltip that appears on the left of the circle */}
              <span className="absolute right-20 scale-0 group-hover:scale-100 transition-transform origin-right bg-gray-800 text-white text-xs px-3 py-2 rounded-xl whitespace-nowrap shadow-xl">
                Ask FounderX 🚀
                <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></span>
              </span>
            </>
          )}
        </button>
      </div>

      {/* --- CHAT WINDOW --- */}
      {open && (
        <div className="fixed bottom-24 right-6 w-[340px] md:w-[400px] h-[520px] bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden border border-gray-100 flex flex-col animate-in slide-in-from-bottom-8 duration-300">
          
          {/* Modern Header */}
          <div className="bg-indigo-600 p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            <div className="flex items-center justify-between relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                  <Rocket size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight">FounderX Support</h3>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span className="text-[10px] text-indigo-100 uppercase tracking-widest font-semibold">Online Assistant</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-1 p-5 overflow-y-auto space-y-4 bg-[#F8FAFC]">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.sender === "user" 
                  ? "bg-indigo-600 text-white rounded-tr-none" 
                  : "bg-white text-gray-700 border border-gray-100 rounded-tl-none"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Suggestions */}
          <div className="px-4 py-2 bg-[#F8FAFC] flex gap-2 overflow-x-auto no-scrollbar border-t border-gray-50">
            {['Funding 💰', 'Co-Founder 🤝', 'Mentors 💡'].map((text) => (
              <button 
                key={text} 
                onClick={() => setInput(text.split(' ')[0])}
                className="bg-white border border-gray-200 text-gray-600 px-3 py-1.5 rounded-full text-xs hover:border-indigo-600 hover:text-indigo-600 transition-all whitespace-nowrap shadow-sm"
              >
                {text}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex gap-2 bg-gray-50 p-1.5 rounded-2xl border border-gray-100 focus-within:border-indigo-300 focus-within:ring-4 focus-within:ring-indigo-50 transition-all">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 bg-transparent border-none px-3 py-2 text-sm outline-none text-gray-700"
                placeholder="Type your message..."
              />
              <button
                onClick={handleSend}
                className="bg-indigo-600 text-white p-2.5 rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}