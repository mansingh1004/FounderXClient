// ForgotPassword.jsx
import { useState } from "react";
import axios from "axios";
import BackEnd from "../config/BackEnd"; // Ensure this path is correct

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let api = `${BackEnd}/user/forgotpassword`;

    try {
      const response = await axios.post(api, { email });
      // ✅ FIX 1: Use 'response.data.msg', not 'data.msg'
      setMsg(response.data.msg); 
      // Optional: Clear email on success
      // setEmail(""); 
    } catch (error) {
      console.error(error);
      // ✅ FIX 2: Handle errors safely to prevent crashing
      if (error.response && error.response.data) {
        setMsg(error.response.data.msg); // Show server error message (e.g., "User not found")
      } else {
        setMsg("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-bold mb-4">Forgot Password</h2>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border p-2 mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded">
          Send Reset Link
        </button>
        {msg && <p className={`mt-3 ${msg.includes("success") || msg.includes("sent") ? "text-green-600" : "text-red-600"}`}>{msg}</p>}
      </form>
    </div>
  );
};

export default ForgotPassword;