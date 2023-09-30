"use client";
import React from "react";
import { TypeAnimation } from 'react-type-animation';
import Image from "next/image";
import imgGif from "../../assets/images/devGif.gif";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="my-6">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <motion.h1 initial={{x:-1000}} animate={{x:0}} className="text-[#99FF99] mb-4 font-bold text-3xl lg:text-6xl">
            Hi, I am Rajat Kumar Saha.
          </motion.h1>
          <h1 className="text-[#36cfc9] mb-4 font-extrabold text-2xl lg:text-6xl">
            
            <TypeAnimation 
              sequence={[
                "I am",
                500,
                "I am a",
                500,
                "I am a React.JS",
                500,
                "I am a React.JS Developer.",
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
        <div className="col-span-5 place-self-center mt-6 lg:mt-0">
            <Image src={imgGif} alt="Dev Image" height={300} width={300} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
