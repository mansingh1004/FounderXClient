import bgImage from "../images/back.png";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import BackEnd from "../config/BackEnd"
import axios from "axios";
import { toast } from "react-toastify";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let api = `${BackEnd}/user/login`;
      const response = await axios.post(api, { email, password });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.userName);
      localStorage.setItem("useremail", response.data.userEmail);

      toast.success("Login Successful!");
      window.dispatchEvent(new Event("user-logged-in"));
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.msg || "Something went wrong!");
    }
  };

  const particlesOptions = useMemo(() => ({
    fullScreen: { enable: false },
    background: { transparent: true },
    fpsLimit: 120,
    interactivity: {
      events: { onHover: { enable: true, mode: "grab" }, resize: true },
      modes: { grab: { distance: 140, links: { opacity: 0.5 } } },
    },
    particles: {
      color: { value: "#ffffff" },
      links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.3, width: 1 },
      move: { enable: true, speed: 1, direction: "none", outModes: { default: "out" } },
      number: { density: { enable: true, area: 800 }, value: 80 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  }), []);

  return (
    <div
      className="relative min-h-screen w-full flex items-center justify-center lg:justify-start font-sans overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at 70% 50%, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.8) 60%), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {init && <Particles id="tsparticles" options={particlesOptions} className="absolute inset-0 z-0" />}

      <div className="relative z-10 w-full max-w-md px-6 sm:px-8 lg:px-12 lg:ml-24 xl:ml-32">
        {/* Header Spacing */}
        <div className="mb-10">
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-2">
            Join the <br /> Ecosystem
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm tracking-widest uppercase">
            Network Connectivity Protocol
            </p>
        </div>

        {/* Form with controlled spacing (space-y-5 manages the margin between inputs) */}
        <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
          
          <div className="flex flex-col">
            <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white text-black rounded-md py-3.5 px-5 outline-none text-sm sm:text-base focus:ring-2 focus:ring-blue-500 transition-all shadow-lg"
            />
          </div>

          <div className="flex flex-col">
            <input
                type="password"
                placeholder="Strong password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-white text-black rounded-md py-3.5 px-5 outline-none text-sm sm:text-base focus:ring-2 focus:ring-blue-500 transition-all shadow-lg"
            />
          </div>

          <div className="flex items-center justify-between px-1">
            <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" required className="w-4 h-4 rounded accent-blue-500" />
                <span className="text-gray-300 text-xs sm:text-sm group-hover:text-white transition">Remember Me</span>
            </label>
            <Link to="/forgotpassword" village className="text-white text-xs sm:text-sm hover:underline hover:text-blue-400 transition">
               Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-[#5cb85c] hover:bg-[#4cae4c] text-white font-bold py-3.5 rounded-md shadow-md transform active:scale-[0.98] transition-all text-sm sm:text-base"
          >
            Log In
          </button>

          {/* Social Buttons Container */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button type="button" className="flex-1 bg-[#1e1e1e] text-gray-300 text-xs py-3 rounded-md border border-gray-700 hover:bg-gray-800 hover:text-white transition">
              Sign in with Google
            </button>
            <button type="button" className="flex-1 bg-[#1e1e1e] text-gray-300 text-xs py-3 rounded-md border border-gray-700 hover:bg-gray-800 hover:text-white transition">
              Sign in with LinkedIn
            </button>
          </div>
        </form>

        <div className="mt-10">
            <button
            onClick={() => navigate("/registration")}
            className="bg-[#3498db] hover:bg-[#2980b9] text-white px-10 py-3 rounded-full font-semibold text-sm shadow-xl transform hover:-translate-y-1 transition-all"
            >
            Create an Account
            </button>
        </div>
      </div>
    </div>
  );
};

export default Login;