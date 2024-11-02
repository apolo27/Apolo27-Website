'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import Sidebar from '../Sidebar/Sidebar';

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsSidebarOpen(false); // Cierra la sidebar después de seleccionar un link en dispositivos móviles
  };

  return (
    <nav className={`${activeLink === '/' ? "bg-transparent" : "bg-gray-800"} w-full absolute font-poppins shadow-md top-0 z-50`}>
      <div className="flex items-center justify-between p-4">
        <div className="flex-shrink-0 ml-0">
          <Link href={'/'} onClick={() => handleLinkClick('/')}>
            <Image
              src="/images/gray-logo.png"
              alt="Apolo 27 Logo"
              width={50}
              height={50}
              className="hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
          </Link>
        </div>

        <div className="flex-grow">
          <ul className="hidden md:flex justify-center space-x-8 text-white">
            {[
              { href: '/dashboard', label: 'Data Dashboard' },
              { href: '/stem-with-us', label: 'Stem With Us' },
              { href: '/sponsors', label: 'Become a Sponsor' },
              { href: '/social-media', label: 'Social Media' },
              { href: '/marketplace', label: 'Marketplace' },
            ].map((item, index) => (
              <li key={index} className="relative">
                <Link
                  href={item.href}
                  onClick={() => handleLinkClick(item.href)}
                  className={`${
                    activeLink === item.href ? 'text-blue-400' : 'text-white'
                  } hover:text-blue-300 transition-colors duration-300`}
                >
                  {item.label}
                </Link>
                {activeLink === item.href && (
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
