import React from "react";
import Logo from "../assets/Logo.png"

const Footer = () => {
  return (
    <div className="bg-[#f3f3f3] flex justify-center items-center px-4 pb-10 py-2 pt-0">
      <div className="w-full max-w-6xl bg-white rounded-[24px] shadow-sm border border-gray-200 py-8 px-3 text-center">
        <div className="flex justify-center items-center gap-3 mb-3">
            <div><img src={Logo} className="size-10"/></div>
            <h2 className="text-xl font-bold">NextHire AI</h2>
            

        </div>
        <p className="text-gray-600 text-sm max-w-xl mx-auto">
                NextHire AI is an AI powered interview platform with resume based questions, real time evaluation, and confidence tracking. Track performance, get detailed reports, and improve your interview skills.
            </p>
      </div>
    </div>
  );
};

export default Footer;
