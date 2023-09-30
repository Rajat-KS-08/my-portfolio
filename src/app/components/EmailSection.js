"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
//import EmailForm from "./EmailForm";
import githubIcon from "../../assets/images/github.png";
import linkedInIcon from "../../assets/images/linkedin.png";
import email from "../../assets/images/gmail.png";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-5 md:my-12 py-5 gap-4 relative"
    >
      <div className="z-10">
        <h5 className="text-3xl font-bold text-white my-2">Contact Me</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          If you have any message for me or just want to say hi, then just mail
          me. I will get back to you.
        </p>
        <br />
        
        
        <div className="socials flex justify-between lg:mr-6  gap-4">
          <Link href="https://github.com/Rajat-KS-08">
            <h6 className="text-[#ffa940] lg:text-2xl text-semibold">
              Checkout my Github Profile{" "}
            </h6>
            <motion.div className="flex justify-center rounded-full mt-4" whileHover={{borderColor:"#f5222d", boxShadow: "0 0 10px #f5222d"}}>
            <Image
              className=""
              src={githubIcon}
              alt="Github"
              height={64}
              width={64}
            />
            </motion.div>
          </Link>
          <br />
          <Link href="https://www.linkedin.com/in/rajat-kumar-saha-28b624197/">
            <h6 className="text-[#ffa940] lg:text-2xl text-semibold">
              Get in Touch with me on{" "}
            </h6>
            <motion.div className="flex justify-center rounded-full mt-4" whileHover={{borderColor:"#f5222d", boxShadow: "0 0 10px #f5222d"}}>
            <Image
              className=""
              src={linkedInIcon}
              alt="LinkedIn"
              height={64}
              width={64}
            />
            </motion.div>
          </Link>
          <br />
          <Link href="mailto:rajatsaha675@gmail.com">
            <h6 className="text-[#ffa940] lg:text-2xl text-bold">
              Send an email to me
            </h6>
            <motion.div className="flex justify-center rounded-full mt-4" whileHover={{borderColor:"#f5222d", boxShadow: "0 0 10px #f5222d"}}>
            <Image
              src={email}
              className=""
              alt="rajatsaha675@gmail.com"
              height={64}
              width={64}
            />
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
