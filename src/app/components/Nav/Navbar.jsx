"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import Sidebar from "../Sidebar/Sidebar";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathName = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <nav
      className={`${
        pathName === "/" ? "bg-[#40D1FF]" : pathName === "/marketplace" ? "bg-transparent absolute" : "bg-gray-800 z-50"
      } w-full font-poppins shadow-md`}
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex-shrink-0 ml-0">
          <Link href={"/"}>
            <Image
              src="/images/logos/logoblanco.png"
              alt="Apolo 27 Logo"
              width={45}
              height={45}
              className="hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
          </Link>
        </div>

        <div className="flex-grow">
          <ul className="hidden md:flex justify-center space-x-8 text-white">
            {[
              { href: "/stem-with-us", label: "Stem With Us" },
              { href: "/sponsors", label: "Become a Sponsor" },
              { href: "/games", label: "STEM Games" },
              { href: "/social-media", label: "Social Media" },
              { href: "/marketplace", label: "Marketplace" },
            ].map((item, i) => (
              <li key={i} className="relative">
                <Link
                  href={item.href}
                  className={`${
                    pathName === item.href ? "text-blue-400" : "text-white"
                  } ${pathName === "/" ? "hover:text-blue-900" : "hover:text-blue-300"}  transition-colors duration-300 text-lg`}
                >
                  {item.label}
                </Link>
                {pathName === item.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-400 rounded-full"></span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={toggleSidebar}
          className="md:hidden focus:outline-none transform transition-transform duration-300 hover:scale-110"
        >
          <img src="/images/menu.svg" alt="Menu" className="h-8 w-8" />
        </button>

        {isSidebarOpen && (
          <Sidebar toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
        )}
      </div>
    </nav>
  );
}
