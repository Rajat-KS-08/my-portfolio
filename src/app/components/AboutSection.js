"use client";
import React, { useTransition, useState, startTransition } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TabButton from './TabButton';
import Card from './Card';
import profileImg from "../../assets/images/profilePic.png";
import skillsGIF from "../../assets/about_me_GIFs/skills.gif";
import educationGIF from "../../assets/about_me_GIFs/education.gif";
import experienceGIF from "../../assets/about_me_GIFs/experience.gif"; 
import certificationsGIF from "../../assets/about_me_GIFs/certificate.gif";
import resumeGIF from "../../assets/about_me_GIFs/resume.gif";

const aboutMe = "Welcome to my personal portfolio website! I am a passionate React.js Developer with a versatile skill set such as JavaScript, TypeScript, React.JS and many other libraries/tools of React. I am passionate about staying up-to-date with the latest industry technologies and always strive to deliver high-quality code that meets the client's requirement.";
const reduxCourseUrl = "https://www.udemy.com/certificate/UC-5af098ca-5a8a-450f-856b-b9888da801c9/";
const reactArchUrl = "https://www.linkedin.com/learning/certificates/ccceeda53d94e8e9f4395856154bf5511fab732965f594a8d13c434075a0d94e";
const TAB_DATA = [
  {
    title : "Skills",
    id : "skills",
    content : (
      <Card cardGIF={skillsGIF} content={
        <ul className='list-disc pl-2'>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Node.JS</li>
          <li>Next.JS</li>
          <li>Unit Testing : JEST, React Testing Library</li>
          <li>State Management Library : Redux, Redux-Toolkit, Redux-Toolkit Query</li>
          <li>Additional : Microfrontend, jQuery, Framer-Motion</li>
        </ul>
      } />
    )
  },
  {
    title : "Education",
    id : "education",
    content : (
      <Card cardGIF={educationGIF} content={
        <ul className='list-disc pl-2'>
          <li>Passed Bachelor of Computer Applications from Lalit Chandra Bharali College under Gauhati University on 2021.</li>
        </ul>
      } />
    )
  },
  {
    title : "Experience",
    id : "experience",
    content : (
      <Card cardGIF={experienceGIF} content={
        <ul className='list-disc pl-2'>
          <li>Software Engineer at Avirasoft Digital Technologies <span className='text-green'>(21st Mar, 2024 - present)</span></li>
          <li>Frontend Developer at Wipro Technologies <span className='text-green'>(16th Aug, 2021 - 4th Mar, 2024)</span></li>
        </ul>
      } />
    )
  },
  {
    title : "Certifications",
    id : "certifications",
    content : (
      <Card cardGIF={certificationsGIF} content={
        <ul className='list-disc pl-2'>
          <li>Advanced Redux and Redux Toolkit Course from Udemy.
            <Link href={reduxCourseUrl}>
              <button
                className="inline-block mt-2 bg-gradient-to-r from-[#23272f] to-[#121212] text-white rounded-full px-4 py-1.5 text-sm font-medium shadow hover:from-[#23272f] hover:to-[#121212] hover:scale-105 transition-all duration-200 border border-[#23272f] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                Check Certificate
              </button>
            </Link>
          </li>
          <li>React : Software Architecture Course from LinkedIn.
            <Link href={reactArchUrl}>
              <button
                className="inline-block mt-2 bg-gradient-to-r from-[#23272f] to-[#121212] text-white rounded-full px-4 py-1.5 text-sm font-medium shadow hover:from-[#23272f] hover:to-[#121212] hover:scale-105 transition-all duration-200 border border-[#23272f] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
              >
                Check Certificate
              </button>
            </Link>
          </li>
        </ul>
      } />
    )
  },
  {
    title : "Resume",
    id : "resume",
    content : (
      <Card cardGIF={resumeGIF} content={
        <ul className='list-disc pl-2'>
          <p>My Resume</p>
        </ul>
      } />
    )
  }
]

const AboutSection = () => {

  const [tab, setTab] = useState("skills");
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
          {/* Desktop Tab Buttons */}
          <div className="hidden md:flex flex-row justify-start mt-8">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === 'skills'}>
              {" "}Skills{" "}
            </TabButton>
            <TabButton active={tab === 'education'} selectTab={() => handleTabChange("education")}> 
              {" "}Education{" "}
            </TabButton>
            <TabButton active={tab === 'experience'} selectTab={() => handleTabChange("experience")}> 
              {" "}Experience{" "}
            </TabButton>
            <TabButton active={tab === 'certifications'} selectTab={() => handleTabChange("certifications")}> 
              {" "}Certifications{" "}
            </TabButton>
            <TabButton active={tab === 'resume'} selectTab={() => handleTabChange("resume")}> 
              {" "}Resume{" "}
            </TabButton>
          </div>
          {/* Mobile Dropdown */}
          <div className="flex md:hidden flex-row justify-start mt-8">
            <select
              className="bg-[#121212] text-white rounded px-4 py-2 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={tab}
              onChange={e => handleTabChange(e.target.value)}
            >
              <option value="skills">Skills</option>
              <option value="education">Education</option>
              <option value="experience">Experience</option>
              <option value="certifications">Certifications</option>
              <option value="resume">Resume</option>
            </select>
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
