"use client";
import React, { useTransition, useState, startTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import TabButton from "./TabButton";
import Card from "./Card";
import profileImg from "../../assets/images/profilePic.png";
import skillsGIF from "../../assets/about_me_GIFs/skills.gif";
import educationGIF from "../../assets/about_me_GIFs/education.gif";
import experienceGIF from "../../assets/about_me_GIFs/experience.gif";
import certificationsGIF from "../../assets/about_me_GIFs/certificate.gif";
import resumeGIF from "../../assets/about_me_GIFs/resume.gif";

const aboutMe =
  "Welcome to my personal portfolio website! I am a passionate React.js Developer with a versatile skill set such as JavaScript, TypeScript, React.JS and many other libraries/tools of React. I am passionate about staying up-to-date with the latest industry technologies and always strive to deliver high-quality code that meets the client's requirement.";
const reduxCourseUrl =
  "https://www.udemy.com/certificate/UC-5af098ca-5a8a-450f-856b-b9888da801c9/";
const reactArchUrl =
  "https://www.linkedin.com/learning/certificates/ccceeda53d94e8e9f4395856154bf5511fab732965f594a8d13c434075a0d94e";
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <Card
        cardGIF={skillsGIF}
        content={
          <ul className="list-disc pl-2 text-left break-words whitespace-normal max-w-full">
            <li>
              <span className="font-bold text-indigo-700">Programming Languages</span>
              <span className="mx-1 text-gray-500 font-semibold">:</span>
              <span className="text-indigo-900 font-medium bg-indigo-100 px-2 py-0.5 rounded-lg ml-1 inline-block whitespace-nowrap">JavaScript</span>,
              <span className="text-indigo-900 font-medium bg-indigo-100 px-2 py-0.5 rounded-lg ml-1 inline-block whitespace-nowrap">TypeScript</span>,
              <span className="text-indigo-900 font-medium bg-indigo-100 px-2 py-0.5 rounded-lg ml-1 inline-block whitespace-nowrap">Core Java</span>
            </li>
            <li>
              <span className="font-bold text-indigo-700">Frontend Tech-Stacks</span>
              <span className="mx-1 text-gray-500 font-semibold">:</span>
              <span className="text-indigo-900 font-medium bg-indigo-100 px-2 py-0.5 rounded-lg ml-1 inline-block whitespace-nowrap">HTML</span>,
              <span className="text-indigo-900 font-medium bg-indigo-100 px-2 py-0.5 rounded-lg ml-1 inline-block whitespace-nowrap">CSS</span>,
              <span className="text-indigo-900 font-medium bg-indigo-100 px-2 py-0.5 rounded-lg ml-1 inline-block whitespace-nowrap">React</span>,
              <span className="text-indigo-900 font-medium bg-indigo-100 px-2 py-0.5 rounded-lg ml-1 inline-block whitespace-nowrap">Next.js</span>
            </li>
            <li>
              <span className="font-bold text-indigo-700">Backend Tech-Stacks</span>
              <span className="mx-1 text-gray-500 font-semibold">:</span>
              <span className="text-indigo-900 font-medium bg-indigo-100 px-2 py-0.5 rounded-lg ml-1 inline-block whitespace-nowrap">Node.js</span>,
              <span className="text-indigo-900 font-medium bg-indigo-100 px-2 py-0.5 rounded-lg ml-1 inline-block whitespace-nowrap">MongoDB</span>,
              <span className="text-indigo-900 font-medium bg-indigo-100 px-2 py-0.5 rounded-lg ml-1 inline-block whitespace-nowrap">SQL</span>
            </li>
            <li>
              <span className="font-bold text-indigo-700">Version Control</span>
              <span className="mx-1 text-gray-500 font-semibold">:</span>
              <span className="text-indigo-900 font-medium bg-indigo-100 px-2 py-0.5 rounded-lg ml-1 inline-block whitespace-nowrap">Git</span>,
              <span className="text-indigo-900 font-medium bg-indigo-100 px-2 py-0.5 rounded-lg ml-1 inline-block whitespace-nowrap">GitHub</span>,
              <span className="text-indigo-900 font-medium bg-indigo-100 px-2 py-0.5 rounded-lg ml-1 inline-block whitespace-nowrap">GitLab</span>
            </li>
            <li>
              <span className="font-bold text-indigo-700">Build Tools</span>
              <span className="mx-1 text-gray-500 font-semibold">:</span>
              <span className="text-indigo-900 font-medium bg-indigo-100 px-2 py-0.5 rounded-lg ml-1 inline-block whitespace-nowrap">Webpack</span>,
              <span className="text-indigo-900 font-medium bg-indigo-100 px-2 py-0.5 rounded-lg ml-1 inline-block whitespace-nowrap">Vite</span>,
              <span className="text-indigo-900 font-medium bg-indigo-100 px-2 py-0.5 rounded-lg ml-1 inline-block whitespace-nowrap">NPM</span>,
              <span className="text-indigo-900 font-medium bg-indigo-100 px-2 py-0.5 rounded-lg ml-1 inline-block whitespace-nowrap">Yarn</span>
            </li>
            <li>
              <span className="font-bold text-indigo-700">Unit Testing</span>
              <span className="mx-1 text-gray-500 font-semibold">:</span>
              <span className="text-indigo-900 font-medium bg-indigo-100 px-2 py-0.5 rounded-lg ml-1 inline-block whitespace-nowrap">JEST</span>,
              <span className="text-indigo-900 font-medium bg-indigo-100 px-2 py-0.5 rounded-lg ml-1 inline-block whitespace-nowrap">React Testing Library</span>
            </li>
            <li>
              <span className="font-bold text-indigo-700">State Management Library</span>
              <span className="mx-1 text-gray-500 font-semibold">:</span>
              <span className="text-indigo-900 font-medium bg-indigo-100 px-2 py-0.5 rounded-lg ml-1 inline-block whitespace-nowrap">Redux</span>,
              <span className="text-indigo-900 font-medium bg-indigo-100 px-2 py-0.5 rounded-lg ml-1 inline-block whitespace-nowrap">Redux-Toolkit</span>,
              <span className="text-indigo-900 font-medium bg-indigo-100 px-2 py-0.5 rounded-lg ml-1 inline-block whitespace-nowrap">Redux-Toolkit Query</span>
            </li>
            <li>
              <span className="font-bold text-indigo-700">Additional</span>
              <span className="mx-1 text-gray-500 font-semibold">:</span>
              <span className="text-indigo-900 font-medium bg-indigo-100 px-2 py-0.5 rounded-lg ml-1 inline-block whitespace-nowrap">Microfrontend</span>,
              <span className="text-indigo-900 font-medium bg-indigo-100 px-2 py-0.5 rounded-lg ml-1 inline-block whitespace-nowrap">jQuery</span>,
              <span className="text-indigo-900 font-medium bg-indigo-100 px-2 py-0.5 rounded-lg ml-1 inline-block whitespace-nowrap">Framer-Motion</span>
            </li>
          </ul>
        }
      />
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <Card
        cardGIF={educationGIF}
        content={
          <ul className="list-disc pl-2">
            <li>
              Passed <span>Bachelor of Computer Applications (B.C.A)</span> from Lalit Chandra
              Bharali College under Gauhati University on <span>2021</span>.
            </li>
          </ul>
        }
      />
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <Card
        cardGIF={experienceGIF}
        content={
          <ul className="list-disc pl-2">
            <li>
              <span>Software Engineer</span> at Avirasoft Digital Technologies{" "}
              <span className="text-green">(21st Mar, 2024 - present)</span>
            </li>
            <li>
              <span>Frontend Developer</span> at Wipro Technologies{" "}
              <span className="text-green">
                (16th Aug, 2021 - 4th Mar, 2024)
              </span>
            </li>
          </ul>
        }
      />
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <Card
        cardGIF={certificationsGIF}
        content={
          <ul className="list-disc pl-2">
            <li>
              Advanced Redux and Redux Toolkit Course from Udemy.
              <Link href={reduxCourseUrl}>
                <button className="inline-block mt-2 bg-gradient-to-r from-[#23272f] to-[#121212] text-white rounded-full px-4 py-1.5 text-sm font-medium shadow hover:from-[#23272f] hover:to-[#121212] hover:scale-105 transition-all duration-200 border border-[#23272f] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                  Check Certificate
                </button>
              </Link>
            </li>
            <li>
              React : Software Architecture Course from LinkedIn.
              <Link href={reactArchUrl}>
                <button className="inline-block mt-2 bg-gradient-to-r from-[#23272f] to-[#121212] text-white rounded-full px-4 py-1.5 text-sm font-medium shadow hover:from-[#23272f] hover:to-[#121212] hover:scale-105 transition-all duration-200 border border-[#23272f] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                  Check Certificate
                </button>
              </Link>
            </li>
          </ul>
        }
      />
    ),
  },
  {
    title: "Resume",
    id: "resume",
    content: (
      <Card
        cardGIF={resumeGIF}
        content={
          <ul className="list-disc pl-2 flex justify-center">
            <a
              href="/documents/Rajat_Kumar_Saha_Resume.pdf"
              download="Rajat_Kumar_Saha_Resume.pdf"
              className="flex flex-row items-center justify-center gap-2 mt-2 bg-gradient-to-r from-[#23272f] to-[#121212] text-white rounded-full px-6 py-2 text-base font-medium shadow hover:from-[#23272f] hover:to-[#121212] hover:scale-105 transition-all duration-200 border border-[#23272f] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 mx-auto"
              style={{ minWidth: '210px', maxWidth: '320px' }}
            >
              <span className="text-center w-full">Download Resume</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
              </svg>
            </a>
          </ul>
        }
      />
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={profileImg} alt="My Profile Pic" height={400} width={400} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
          <p className="text-base lg:text-lg">{aboutMe}</p>
          {/* Desktop Tab Buttons */}
          <div className="hidden md:flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              active={tab === "education"}
              selectTab={() => handleTabChange("education")}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              active={tab === "experience"}
              selectTab={() => handleTabChange("experience")}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              active={tab === "certifications"}
              selectTab={() => handleTabChange("certifications")}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              active={tab === "resume"}
              selectTab={() => handleTabChange("resume")}
            >
              {" "}
              Resume{" "}
            </TabButton>
          </div>
          {/* Mobile Dropdown */}
          <div className="flex md:hidden flex-row justify-center mt-8">
            <div className="relative w-full max-w-xs">
              <select
                className="bg-[#181f1b] bg-gradient-to-r from-[#23272f] to-[#121212] text-white rounded-full px-6 py-3 pr-10 border-2 border-[#36cfc9] shadow-lg focus:outline-none focus:ring-2 focus:ring-[#36cfc9] focus:ring-offset-2 text-base font-semibold transition-all duration-200 hover:border-[#99FF99] hover:shadow-xl w-full appearance-none"
                value={tab}
                onChange={(e) => handleTabChange(e.target.value)}
              >
                <option value="skills">Skills</option>
                <option value="education">Education</option>
                <option value="experience">Experience</option>
                <option value="certifications">Certifications</option>
                <option value="resume">Resume</option>
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400 text-lg">
                ▼
              </span>
            </div>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
