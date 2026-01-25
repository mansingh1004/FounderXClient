import  { useState,useEffect  } from 'react';
import { Mail, MapPin, Phone, Send, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';




const ContactPage = () => {


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Submitted:', formData);
    alert("Thanks! We'll be in touch shortly.");
  };

  return (
    <div    className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      
      {/* Main Container Card */}
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        
        {/* --- LEFT SIDE: Contact Info --- */}
        <div className="lg:w-5/12 bg-blue-700 text-white p-10 flex flex-col justify-between relative overflow-hidden">
          
          {/* Decorative Circles (Background) */}
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600 rounded-full opacity-50 z-0"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-600 rounded-full opacity-50 z-0"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in touch</h2>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed">
              Have a question about FounderXConnect? We're here to help you find your perfect co-founder or investor.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-full shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Chat with us</h3>
                  <p className="text-blue-100">support@founderxconnect.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-full shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Call us</h3>
                  <p className="text-blue-100">+91 98765 43210</p>
                  <p className="text-blue-200 text-sm">Mon - Fri, 9am - 6pm</p>
                </div>
              </div>

              {/* Office */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 p-3 rounded-full shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Visit us</h3>
                  <p className="text-blue-100">
                    123 Startup Hub, Koramangala<br />
                    Bangalore, India 560034
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="relative z-10 mt-12">
            <h4 className="font-semibold mb-4">Follow us</h4>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={20} />} />
              <SocialIcon icon={<Twitter size={20} />} />
              <SocialIcon icon={<Linkedin size={20} />} />
              <SocialIcon icon={<Instagram size={20} />} />
            </div>
          </div>

        </div>

        {/* --- RIGHT SIDE: Contact Form --- */}
        <div className="lg:w-7/12 p-10 lg:p-16 bg-white">
          
          <h3 className="text-3xl font-bold text-gray-900 mb-2">Send us a message</h3>
          <p className="text-gray-500 mb-10">We usually respond within 24 hours.</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name Fields Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">First Name</label>
                <input 
                  type="text" 
                  name="firstName"
                  placeholder="John"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all outline-none text-gray-800"
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Last Name</label>
                <input 
                  type="text" 
                  name="lastName"
                  placeholder="Doe"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all outline-none text-gray-800"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Email & Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all outline-none text-gray-800"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Phone (Optional)</label>
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="+91 00000 00000"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all outline-none text-gray-800"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">How can we help?</label>
              <textarea 
                rows="4"
                name="message"
                placeholder="Tell us about your startup or what you are looking for..."
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 transition-all outline-none text-gray-800 resize-none"
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-blue-600/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Send Message
              <Send size={18} />
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

// Helper Component for Social Icons
const SocialIcon = ({ icon }) => {
  return (
    <a href="#" className="w-10 h-10 rounded-full bg-blue-800 hover:bg-white hover:text-blue-700 flex items-center justify-center transition-all duration-300">
      {icon}
    </a>
  );
}

export default ContactPage;