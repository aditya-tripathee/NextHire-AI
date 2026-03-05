import React from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { motion } from "motion/react";
import { HiSparkles } from "react-icons/hi";

const Home = () => {
  const { userData } = useSelector((state) => state.user);
  return (
    <div className="min-h-screen bg-[#f3f3f3] flex-col">
      <Navbar />
      <div className="flex-1 px-6 py-20">
        <div className="flex justify-center mb-6">
          <div className=" bg-gray-100 text-gray-600 text-sm px-4 py-2 rounded-full flex items-center gap-2">
            <HiSparkles size={16} className="bg-green-50 text-green-600" />
            AI Powered Smart Interview Platform
          </div>
        </div>
        <div className="text-center mb-28">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-semibold max-w-4xl mx-auto leading-tight"
          >
            Practice Interview with
            <br />
            <span className="bg-green-100 font-semibold text-green-600 px-5 py-1 rounded-full">
              AI Intelligence
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg "
          >
            Practice interviews with AI guidance, get instant feedback, and
            boost your confidence to ace every interview.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <motion.button
              whileHover={{ opacity: 0.9, scale: 1.03 }}
              whileTap={{ opacity: 1, scale: 0.98 }}
              className="bg-black text-white px-10 py-3 cursor-pointer rounded-full hover:opacity-95 transition shadow-md"
            >
              Start Interview
            </motion.button>
            <motion.button
              whileHover={{ opacity: 0.9, scale: 1.03 }}
              whileTap={{ opacity: 1, scale: 0.98 }}
              className="bg-black text-white px-10 py-3 cursor-pointer rounded-full hover:opacity-95 transition shadow-md"
            >
              Start Interview
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
