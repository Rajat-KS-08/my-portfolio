"use client";
import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { motion } from 'framer-motion';
import logo from "../../assets/images/rksLOGO.gif";


const navLinks = [
  {
    title : "About Me",
    path : "#about"
  },
  {
    title : "Projects",
    path : "#projects"
  },
  {
    title : "Contact Me",
    path : "#contact"
  }
];

const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href={"/"}>
          <Image src={logo} alt='LOGO' height={60} width={60} />
        </Link>
        
        <div className="mobile-menu block md:hidden">
          {
            !navbarOpen ? (
              <button 
                onClick={() => (setNavbarOpen(true))}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button 
                onClick={() => (setNavbarOpen(false))}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )
          }
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              {navLinks.map((l, index) => (
                <motion.li className='rounded-full px-2' whileHover={{scale:1.3, borderColor:"#f5222d", boxShadow: "0 0 10px #f5222d"}} key={index}>
                  <NavLink href={l.path} title={l.title}  />
                </motion.li>
              ))}
            </ul>
        </div>
      </div>
      {navbarOpen ? ( <MenuOverlay links={navLinks} /> ) : (null)}
    </nav>
  )
}

export default Navbar;
