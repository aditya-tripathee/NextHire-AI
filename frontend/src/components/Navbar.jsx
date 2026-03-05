
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "motion/react";
import Logo from "/Log.png";
import { BsCoin } from "react-icons/bs";
import { FaUserAstronaut } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import axios from "axios";
import { serverUrl } from "../App";
import { setUserData } from "../redux/userSlice";
import AuthModels from "./AuthModels";
import Auth from "../pages/Auth";

const Navbar = () => {
  const { userData } = useSelector((store) => store.user);
  const [showCreditPopup, setShowCreditPopup] = useState(false);
  const [showUserPopup, setShowUserPopup] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await axios.post(
        `${serverUrl}/api/auth/logout`,
        {},
        { withCredentials: true }
      );
      dispatch(setUserData(null));
      setShowCreditPopup(false);
      setShowUserPopup(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#f3f3f3] flex justify-center px-4 pt-6 relative">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full md:max-w-6xl bg-white rounded-[24px] shadow-sm border border-gray-200 md:px-8 px-3 py-4 flex justify-between items-center relative z-10"
      >
        {/* logo */}
        <div className="flex items-center cursor-pointer gap-0">
          <img src={Logo} className="size-10" />
          <h1 className="text-xl font-bold">NextHire AI</h1>
        </div>

        {/* right side */}
        <div className="flex items-center justify-center relative gap-4">
          {/* Credits */}
          <div className="relative">
            <button
              onClick={() => {
                if (!userData) {
                  setShowAuth(true);
                  return;
                }
                setShowCreditPopup(!showCreditPopup);
              }}
              className="flex items-center cursor-pointer gap-2 bg-gray-100 px-4 py-2 rounded-full text-md hover:bg-gray-200 transition"
            >
              <BsCoin size={20} />
              {userData?.user?.credits || 0}
            </button>
            {showCreditPopup && userData && (
              <div className="absolute right-[-50px] mt-3 w-64 bg-white shadow-xl border border-gray-200 rounded-xl p-5 z-50">
                <p className="text-sm text-gray-700">
                  Need credits to continue interviews?
                </p>
                <button
                  className="w-full bg-black text-sm py-2 rounded-lg cursor-pointer text-white mt-1"
                  onClick={() => navigate("/pricing")}
                >
                  Buy more credits
                </button>
              </div>
            )}
          </div>

          {/* User Icon */}
          <div className="relative">
            <button
              onClick={() => {
                if (!userData) {
                  setShowAuth(true); // not logged in → open auth modal
                  return;
                }
                setShowUserPopup(!showUserPopup); // logged in → open user popup
              }}
              className="w-9 h-9 bg-black text-white cursor-pointer rounded-full flex items-center justify-center font-semibold"
            >
              {userData ? userData?.user.name.charAt(0).toUpperCase() : <FaUserAstronaut />}
              
            </button>

            {showUserPopup && userData && (
              <div className="absolute right-0 mt-3 w-48 bg-white shadow-xl border border-gray-200 rounded-xl p-4 z-50">
                <p className="text-sm font-semibold mb-1">{userData?.user?.name}</p>
                <button
                  onClick={() => navigate("/history")}
                  className="w-full text-left text-sm py-1 font-semibold hover:text-black text-gray-600 cursor-pointer"
                >
                  Interview History
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full text-left text-sm font-semibold hover:text-red-600 text-red-600 cursor-pointer mt-2"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Auth Modal */}
      {showAuth && <AuthModels onClose={() => setShowAuth(false)} />}
      
    </div>
  );
};

export default Navbar;