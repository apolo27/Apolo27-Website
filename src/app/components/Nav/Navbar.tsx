'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import Sidebar from '../Sidebar/Sidebar';

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-gray-800 font-poppins">
      <div className="flex items-center justify-between p-4">
        <div className="flex-shrink-0 ml-0">
          <Image src="/images/gray-logo.png" alt="Apolo 27 Logo" width={50} height={50} />
        </div>

        <div className="flex-grow">
          <ul className="hidden md:flex justify-center space-x-8 text-white">
            <li className="hover:text-gray-300">
              <Link href="/dashboard">Data Dashboard</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link href="/stem-with-us">Stem With Us</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link href="/sponsors">Become a Sponsor</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link href="/social-media">Social Media</Link>
            </li>
            <li className="hover:text-gray-300">
              <Link href="/marketplace">Marketplace</Link>
            </li>
          </ul>
        </div>

        <button onClick={toggleSidebar} className="md:hidden">
          <img src="/images/menu.svg" alt="Menu" className="h-8 w-8" />
        </button>

        {isSidebarOpen && (
          <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
        )}
      </div>
    </nav>
  );
}
