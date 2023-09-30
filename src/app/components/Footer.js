import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from "../../assets/images/rksLOGO.gif";
import copyright from "../../assets/images/copyright.gif";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
        <div className="container p-12 flex justify-center gap-3">
            <Link href="/">
                <Image src={logo} alt='LOGO' height={60} width={60} />
            </Link>
            <div className="border-l border-gray h-18" />
            <span><Image src={copyright} alt='copyright' height={40} width={40} /></span>
            <p className="text-[#ff4d4f] lg:text-3xl">
              All rights reserved.
            </p>
        </div>
    </footer>
  )
}

export default Footer;
