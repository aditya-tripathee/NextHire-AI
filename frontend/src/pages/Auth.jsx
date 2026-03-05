import React from "react";
import { FaRobot } from "react-icons/fa";
import { IoSparklesSharp } from "react-icons/io5";
import { motion } from "motion/react";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utilis/Firebase";
import axios from "axios";
import { serverUrl } from "../App";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const Auth = ({isModel = false}) => {
  const dispatch = useDispatch();
  const handleGoogleAuth = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      let User = response.user;
      let name = User.displayName;
      let email = User.email;
      const result = await axios.post(
        `${serverUrl}/api/auth/google`,
        { email, name },
        { withCredentials: true },
      );
      dispatch(setUserData(result.data));
      // navigate("/")
    } catch (error) {
      console.log(error);
      dispatch(setUserData(null));
    }
  };
  return (
    <div className="w-full min-h-screen bg-[#f3f3f3] flex items-center justify-center px-6 py-25 ">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.05 }}
        className="w-full max-w-md p-10 rounded-3xl bg-white shadow-2xl border border-gray-200"
      >
        <div className=" flex items-center justify-center gap-3 mb-6">
          {/* logo and title */}
          <div className="bg-black text-white p-2 rounded-lg">
            <FaRobot size={18} />
          </div>
          <h2 className=" text-xl font-medium">NextHire.AI</h2>
        </div>
        {/* data like button  */}
        <h1 className="text-2xl md:text-2xl font-medium text-center leading-snug mb-4">
          Continue with
          <span className="bg-green-200 text-green-600 px-5  py-2 mt-1 rounded-full  inline-flex items-center gap-2 text-xl ">
            AI Smart Interview
            <IoSparklesSharp />
          </span>
        </h1>
        <p className="text-gray-500 text-center text-sm md:text-base leading-relaxed mb-8">
          Ready to ace your interview? Sign in and start practicing with AI –
          smart, fast, and personalized for you!
        </p>

        <motion.button
          onClick={handleGoogleAuth}
          whileHover={{ opacity: 0.9, scale: 1.03 }}
          whileTap={{ opacity: 1, scale: 0.9 }}
          className="w-full flex py-3 cursor-pointer items-center justify-center gap-3 bg-black text-white rounded-full shadow-md"
        >
          <FcGoogle size={20} /> Continue with Google
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Auth;


