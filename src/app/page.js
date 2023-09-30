import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container mx-auto py-4 px-12">
      <Navbar />
      <div class="container mt-24 mx-auto  py-4">
        <HeroSection />
        <hr className="border border-t-2 my-4" />
        <AboutSection />
        <hr className="border border-t-2 my-4" />
        <ProjectsSection />
        <hr className="border border-t-2 my-4" />
        <EmailSection />
        <hr className="border border-t-2 my-4" />
        <Footer />
      </div>
    </main>
  )
}
