import React, { useState } from 'react';
import axios from"axios"
import BackEnd from"../config/BackEnd"
const Register = () => {
  // State to handle the "Role" selection (Founder, Investor, Specialist)
  const [selectedRole, setSelectedRole] = useState('founder');

const [input,setInput]=useState({})

const handleInput=(e)=>{

    let name=e.target.name;
    let value=e.target.value
    setInput(values=>({...values,[name]:value}));
    console.log(input)




    
}


    const handleSubmit=async(e)=>{
        e.preventDefault();

        let api=`${BackEnd}/user/registration`; 
        const response= await axios.post(api,input);
        console.log()
    }




  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-[#0d0d0d] overflow-hidden font-sans">
      
      {/* Background Layer: Reusing the dark gradient style */}
      <div 
        className="absolute inset-0 z-0 opacity-50"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(50, 50, 80, 0.3) 0%, transparent 70%)`,
        }}
      ></div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-lg px-8 py-10 bg-[#121212] border border-gray-800 rounded-2xl shadow-2xl sm:px-12">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-white text-4xl font-bold mb-2">
            Create Account
          </h1>
          <p className="text-gray-500 text-sm tracking-wide">
            Join the FounderXConnect Ecosystem
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          
          {/* Full Name */}
          <div>
            <label className="block text-gray-400 text-xs mb-1 ml-1">Full Name</label>
            <input
              type="text"
              placeholder="John Doe" 
              name='name' onChange={handleInput}
              className="w-full bg-[#1a1a1a] text-gray-300 border border-gray-800 rounded-md py-3 px-4 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-gray-400 text-xs mb-1 ml-1">Email Address</label>
            <input
              type="email"
              placeholder="name@example.com"
              name='email' onChange={handleInput}
              className="w-full bg-[#1a1a1a] text-gray-300 border border-gray-800 rounded-md py-3 px-4 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Role Selection (Visual Cards) */}
          <div>
            <label className="block text-gray-400 text-xs mb-2 ml-1">I am a...</label>
            <div className="grid grid-cols-3 gap-3">
              {['Founder', 'Investor', 'Specialist'].map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => setSelectedRole(role.toLowerCase())}
                  className={`py-2 text-xs font-medium rounded-md border transition-all ${
                    selectedRole === role.toLowerCase()
                      ? 'bg-green-600 border-green-600 text-white'
                      : 'bg-[#1a1a1a] border-gray-800 text-gray-400 hover:border-gray-600'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-400 text-xs mb-1 ml-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              name='password' onChange={handleInput}
              className="w-full bg-[#1a1a1a] text-gray-300 border border-gray-800 rounded-md py-3 px-4 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start space-x-3 pt-2">
            <input 
              type="checkbox" 
              className="mt-1 w-4 h-4 rounded border-gray-700 bg-transparent text-green-500 focus:ring-0 cursor-pointer" 
            />
            <span className="text-gray-500 text-xs leading-tight">
              I agree to the <a href="#" className="text-green-500 hover:underline">Terms of Service</a> and <a href="#" className="text-green-500 hover:underline">Privacy Policy</a>.
            </span>
          </div>

          {/* Sign Up Button */}
          <button    onClick={handleSubmit} className="w-full bg-[#5cb85c] hover:bg-[#4cae4c] text-white font-bold py-3 rounded-md transition-colors shadow-lg mt-4">
            Sign Up
          </button>
        </form>

        {/* Footer Link */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Already have an account?{' '}
            <a href="/login" className="text-white font-medium hover:text-green-500 transition-colors">
              Log In
            </a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Register;