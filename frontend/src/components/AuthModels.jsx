import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import Auth from "../pages/Auth";

const AuthModels = ({ onClose }) => {
  const { userData } = useSelector((state) => state.user);
  useEffect(() => {
    if (userData) {
      onClose();
    }
  }, [userData, onClose]);

  return (
    // <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/10 backdrop-blur-sm px-4">
         <div className="w-full min-h-screen fixed inset-0 z-[999] bg-[#f3f3f3] flex items-center justify-center md:px-8 py-25 ">

      <div className="relative w-full max-w-md">
        <button
          onClick={onClose}
          className=" absolute top-8 right-5 text-gray-800 hover:text-black text-xl"
        >
          <FaTimes size={18} />
        </button>
        <Auth isModel={true}/>
      </div>
    </div>
  );
};

export default AuthModels;


