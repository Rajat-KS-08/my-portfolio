"use client";
import React, {useState} from "react";
import { TypeAnimation } from 'react-type-animation';
import Image from "next/image";
import devl from "../../assets/images/devGif.gif";
import { motion } from "framer-motion";
import Spinner from "./Spinner";

const HeroSection = () => {

  

  return (
    <section className="my-6">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <motion.h1 initial={{x:-1000}} animate={{x:0}} className="text-[#009688] mb-4 font-bold text-3xl lg:text-6xl">
            Hi, I am Rajat Kumar Saha.
          </motion.h1>
          <h1 className="text-white mb-4 font-extrabold text-2xl lg:text-6xl drop-shadow-[0_0_12px_white]">
            <TypeAnimation 
              sequence={[
                "I am",
                500,
                "I am a",
                500,
                "I am a Frontend",
                500,
                "I am a Frontend Developer.",
                500,
                "",
                500
              ]} 
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">With an insatiable curiosity for web development, I thrive on mastering new technologies and creating digital experiences that captivate and engage users.</p>
        </div>
        <div className="col-span-5 place-self-center mt-6 lg:mt-0 rounded-3xl shadow-2xl border-2 border-[#009688] bg-[#181f1b] relative overflow-hidden" style={{boxShadow: '0 0 32px 4px #36cfc9, 0 8px 32px 0 #0008'}}>
          <Image
            src={devl} 
            alt="Dev Image"  
            sizes="(max-width : 500px) 100vw, (max-width : 1200px) 30vw, 30vw" 
            className="rounded-3xl border-2 border-[#99FF99] shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
