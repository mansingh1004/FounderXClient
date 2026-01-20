import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BackEnd from "../config/BackEnd"

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirm) {
      return setMsg("Passwords do not match");
    }

    try {
      const res = await axios.post(
        `${BackEnd}/user/resetpassword/${token}`,
        { password }
      );
      setMsg(res.data.msg);
    } catch (err) {
      setMsg("Link expired or invalid");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-xl w-full max-w-md shadow-lg"
      >
        <h2 className="text-white text-2xl mb-4 text-center">
          Reset Password
        </h2>

        <input
          type="password"
          placeholder="New Password"
          className="w-full p-3 mb-3 rounded bg-gray-700 text-white outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-3 mb-3 rounded bg-gray-700 text-white outline-none"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />

        <button className="w-full bg-blue-600 hover:bg-blue-700 p-3 rounded text-white">
          Reset Password
        </button>

        {msg && <p className="text-center text-green-400 mt-3">{msg}</p>}
      </form>
    </div>
  );
};

export default ResetPassword;
