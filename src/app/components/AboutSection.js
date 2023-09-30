"use client";
import React, { useTransition, useState, startTransition } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TabButton from './TabButton';
import profileImg from "../../assets/images/profilePic.png";

const aboutMe = "Welcome to my personal portfolio website! I am a passionate React.js Developer with a versatile skill set such as JavaScript, TypeScript, React.JS and many other libraries/tools of React. I am passionate about staying up-to-date with the latest industry technologies and always strive to deliver high-quality code that meets the client's requirement.";
const reduxCourseUrl = "https://www.udemy.com/certificate/UC-5af098ca-5a8a-450f-856b-b9888da801c9/";
const reactArchUrl = "https://www.linkedin.com/learning/certificates/ccceeda53d94e8e9f4395856154bf5511fab732965f594a8d13c434075a0d94e";
const TAB_DATA = [
  {
    title : "Skills",
    id : "skills",
    content : (
      <ul className='list-disc pl-2'>
        <li>Python</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>TypeScript(Basic)</li>
        <li>React.js</li>
        <li>Next.JS(Basic)</li>
        <li>Axios</li>
        <li>React Tools : react-router-dom, formik, React Testing Library, Material UI</li>
        <li>State Management Library : Redux</li>
        <li>Additional : Redux-Toolkit, Redux-Toolkit Query, BootStrap, jQuery, Framer-Motion</li>
      </ul>
    )
  },
  {
    title : "Education",
    id : "education",
    content : (
      <ul className='list-disc pl-2'>
        <li>Passed Bachelor of Computer Applications from Lalit Chandra Bharali College under Gauhati University on 2021.</li>
      </ul>
    )
  },
  {
    title : "Experience",
    id : "experience",
    content : (
      <ul className='list-disc pl-2'>
        <li>React.JS Developer at Wipro Technologies <span className='text-green'>(16th Aug, 2021 - present)</span></li>
      </ul>
    )
  },
  {
    title : "Certifications",
    id : "certifications",
    content : (
      <ul className='list-disc pl-2'>
        <li>Advanced Redux and Redux Toolkit Course from Udemy.<Link href={reduxCourseUrl}><button className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Click to check the Certificate</button></Link></li>
        <li>React : Software Architecture Course from LinkedIn.<Link href={reactArchUrl}><button className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Click to check the Certificate</button></Link></li>
      </ul>
    )
  }
]

const AboutSection = () => {

  const [tab, setTab] = useState("Skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  }

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={profileImg} alt='My Profile Pic' height={400} width={400} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h1 className="text-4xl font-bold text-white mb-4">
            About Me
          </h1>
          <p className="text-base lg:text-lg">{aboutMe}</p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === 'skills'} >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton active={tab === 'education'} selectTab={() => handleTabChange("education")}>
              {" "}
              Education{" "}
            </TabButton>
            <TabButton active={tab === 'experience'} selectTab={() => handleTabChange("experience")}>
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton active={tab === 'certifications'} selectTab={() => handleTabChange("certifications")}>
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;
