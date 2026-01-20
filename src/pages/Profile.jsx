// ProfileModal.jsx
import { useState } from "react";

const ProfileModal = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Button to open modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        {user.name}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Right-side modal */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Profile</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-800"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="mb-4">
            <p className="font-medium">Name:</p>
            <p>{user.name}</p>
          </div>

          <div className="mb-4">
            <p className="font-medium">Email:</p>
            <p>{user.email}</p>
          </div>

          <button className="w-full mb-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
            Edit Profile
          </button>

          <button className="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileModal;
