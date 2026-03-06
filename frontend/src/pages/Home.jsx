import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { motion } from "motion/react";
import { HiSparkles } from "react-icons/hi";
import AuthModels from "../components/AuthModels";
import { useNavigate } from "react-router-dom";
import { BsRobot, BsMic } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { MdTimer } from "react-icons/md";
import hrImage from "../assets/HR.png";
import techImg from "../assets/tech.png";
import confidenceImg from "../assets/confi.png";
import creditImg from "../assets/credit.png";
import evalImg from "../assets/ai-ans.png";
import resumeImg from "../assets/resume.png";
import pdfImg from "../assets/pdf.png";
import analyticsImg from "../assets/history.png";
import { BsBarChart } from "react-icons/bs";
import { BsFileEarmarkText } from "react-icons/bs";
import Footer from "../components/Footer";

const Home = () => {
  const { userData } = useSelector((state) => state.user);
  const [showAuth, setShowAuth] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#f3f3f3] flex-col">
      <Navbar />
      <div className="flex-1 px-6 py-20">
        <div className="max-w-6xl mx-auto">
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
                onClick={() => {
                  if (!userData) {
                    setShowAuth(true);
                    return;
                  }
                  navigate("/interview");
                }}
                whileHover={{ opacity: 0.9, scale: 1.03 }}
                whileTap={{ opacity: 1, scale: 0.98 }}
                className="bg-black text-white px-10 py-3 cursor-pointer rounded-full hover:opacity-95 transition shadow-md"
              >
                Start Interview
              </motion.button>
              <motion.button
                onClick={() => {
                  if (!userData) {
                    setShowAuth(true);
                    return;
                  }
                  navigate("/history");
                }}
                whileHover={{ opacity: 0.9, scale: 1.03 }}
                whileTap={{ opacity: 1, scale: 0.98 }}
                className="font-semibold text-black bg-white px-10 py-3 cursor-pointer rounded-full hover:opacity-95 transition shadow-md"
              >
                View History
              </motion.button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-28">
            {[
              {
                icon: <FaUserTie size={24} />,
                step: "STEP 1",
                title: "Role & Experience Selection",
                desc: "AI adjusts interview difficulty based on the selected job role and experience.",
              },
              {
                icon: <BsMic size={24} />,
                step: "STEP 2",
                title: "Smart Voice Interview",
                desc: "Interact with an AI interviewer using voice for a realistic interview experience.",
              },
              {
                icon: <MdTimer size={24} />,
                step: "STEP 3",
                title: "Timer Based Simulation",
                desc: "Practice interviews with real-time timers to simulate actual interview pressure.",
              },
            ].map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 + index * 0.2 }}
                whileHover={{ rotate: 0, scale: 1.06 }}
                key={index}
                className={`relative bg-white
             rounded-3xl border-2 border-green-100 hover:border-green-500 cursor-pointer p-10 w-80 max-w-[90%] shadow-md hover:shadow-2xl
              transition-all duration-300
             ${index === 0} ? "rotate-[-4deg]":""}
             ${index === 0} ? "rotate-[-3deg] md:-mt-6 shadow-xl":""}
             ${index === 0} ? "rotate-[-3deg]":""`}
              >
                <div className="absolute -top-8 left-1/1 -translate-x-1/2 bg-white border-2 border-green-500 text-green-600 w-16 h-16 rounded-2xl items-center flex justify-center shadow-lg">
                  {item.icon}{" "}
                </div>
                <div className="pt-10 text-center">
                  <div className="text-xs text-green-600 font-semibold mb-2 tracking-wider">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-xl">{item.title}</h3>
                  <p className="text-sm ">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mb-32">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className=" text-4xl font-semibold text-center mb-16"
            >
              Advanced AI{" "}
              <span className="text-green-600 font-semibold">Capabilities</span>
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-10">
              {[
                {
                  image: evalImg,
                  icon: <BsBarChart size={24} />,
                  title: "AI Answer Evaluation",
                  desc: "AI analyzes your answers for accuracy, clarity, and confidence, providing detailed feedback to help you improve.",
                },
                {
                  image: resumeImg, // image path ya URL
                  icon: <BsFileEarmarkText size={24} />,
                  title: "Resume Based Interview",
                  desc: "AI generates interview questions tailored to your resume, focusing on your skills and experience.",
                },
                {
                  image: pdfImg, // image path ya URL
                  icon: <BsFileEarmarkText size={24} />,
                  title: "Downloadable PDF Report",
                  desc: "Get a detailed PDF report of your AI interview performance, including scores, insights, and improvement suggestions.",
                },
                {
                  image: analyticsImg, // image path ya URL
                  icon: <BsBarChart size={24} />,
                  title: "History & Analytics",
                  desc: "Track your past interview attempts, review performance trends, and identify areas to improve over time.",
                },
              ].map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.06 }}
                  key={index}
                  className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-1/2 flex justify-center ">
                      <img
                        src={item.image}
                        alt="item.title"
                        className="w-full h-auto object-contain max-h-64"
                      />
                    </div>
                    <div className="w-full md:w-1/2 ">
                      <div className="bg-green-50 text-green-600 flex justify-center items-center rounded-xl mb-6 w-12 h-12 ">
                        {item.icon}
                      </div>
                      <h3 className="font-semibold mb-3 text-xl">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ------------------------------------------------- */}
          <div className="mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className=" text-4xl font-semibold text-center mb-16"
            >
              Multiple Interview{" "}
              <span className="text-green-600 font-semibold">Modes</span>
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-10">
              {[
                {
                  image: hrImage,
                  title: "HR Interview Mode",
                  desc: "Practice AI powered HR interviews to assess communication, behavioral skills, and confidence.",
                },
                {
                  image: techImg,
                  title: "Technical Mode",
                  desc: "Simulate technical interviews with AI generated questions on coding, algorithms, and domain skills.",
                },
                {
                  image: confidenceImg,
                  title: "Confidence Detection",
                  desc: "AI evaluates your confidence, tone, and body language during interviews to provide actionable insights.",
                },
                {
                  image: creditImg,
                  title: "Credits System",
                  desc: "Track and manage your platform credits for accessing AI interviews, reports, and premium features.",
                },
              ].map((item, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ scale: 1.06 }}
                  key={index}
                  className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full ">
                      <h3 className="font-semibold mb-3 text-xl">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center ">
                      <img
                        src={item.image}
                        alt="item.title"
                        className="w-30 h-35 object-contain"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
      {showAuth && <AuthModels onClose={() => setShowAuth(false)} />}
      <Footer/>
    </div>
  );
};

export default Home;
