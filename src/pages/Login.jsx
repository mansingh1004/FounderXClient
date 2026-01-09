import bgImage from "../images/back.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate=useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword]= useState("");

  

  const handleSubmit =async (e) => {
    e.preventDefault();
   let api=`${BackEndUrl}/user/login`;
  
    
  
   const response=await axios.post(api,{email,password})
   console.log(response);
   navigate("")
    // toast.success(response.data.message)
   
    toast.success(response.data.message, {
      position: "top-center",
      autoClose: 4000, // Toast disappears after 2s
    });    

    localStorage.setItem("token", response.data.accessToken);
  };




  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center lg:justify-start font-sans"
      style={{
        backgroundImage: `
          radial-gradient(circle at 70% 50%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.8) 60%),
          url(${bgImage})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content */}
      <div className="relative z-10 w-full max-w-md px-6 sm:px-10 lg:px-12 lg:ml-24 xl:ml-32">
        
        {/* Header */}
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-2">
          Join the <br /> Ecosystem
        </h1>

        <p className="text-gray-400 text-xs sm:text-sm mb-8 tracking-widest uppercase">
          Network Connectivity Protocol
        </p>

        {/* Form */}
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Enter Email"



             value={email} onChange={(e)=>{setEmail(e.target.value)}}
            required
            className="w-full bg-white text-black rounded-md py-3 px-4 outline-none text-sm sm:text-base"
        
        
        
        />

          <input
            type="password"
            minLength={8}
            maxLength={8}
            placeholder="Strong password"
 value={password}
        onChange={(e)=>{setPassword(e.target.value)}} 
        
              


            required
            className="w-full bg-white text-black rounded-md py-3 px-4 outline-none text-sm sm:text-base"
          /> 

          {/* Remember Me */}
          <div className="flex items-center justify-between py-2">
            <span className="text-gray-300 text-xs sm:text-sm">
              Remember Me
            </span>
            <input type="checkbox"   required   className="w-4 h-4" />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            // onClick={() => navigate("/login")}
            className="w-full bg-[#5cb85c] hover:bg-[#4cae4c] text-white font-bold py-3 rounded-md transition text-sm sm:text-base"
         
          onSubmit={handleSubmit} 
         >
            Log In
          </button>

          {/* Social Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button className="flex-1 bg-[#1e1e1e] text-gray-300 text-xs sm:text-sm py-2 rounded-md border border-gray-700 hover:bg-gray-800">
              Sign in with Google
            </button>
            <button className="flex-1 bg-[#1e1e1e] text-gray-300 text-xs sm:text-sm py-2 rounded-md border border-gray-700 hover:bg-gray-800">
              Sign in with LinkedIn
            </button>
          </div>
        </form>

        {/* Pagination */}
        <div className="flex space-x-2 my-10 justify-center lg:justify-start">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full ${
                i === 2 ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>

        {/* Create Account */}
        <button
          onClick={() => navigate("/registration")}
          className="w-full sm:w-auto bg-[#3498db] hover:bg-[#2980b9] text-white px-8 py-3 rounded-full font-semibold text-sm transition"
        >
          Create an Account
        </button>
      </div>
    </div>
  );
};

export default Login;
